import { useState, useContext, useEffect } from 'react';

import { LayoutContext } from '../../contexts';

interface IfetchInitialObj {
  serviceArguments?: any;
  serviceCaller?: any;
  defaultValue?: any;
  onError?: any;
  onSuccess?: any;
  showSuccessNotification?: boolean;
  successMessage?: string;
}

function useFetch(fetchInitialObj: IfetchInitialObj) {
  const [data, setData] = useState(null);
  const [fetchObj, doFetch] = useState<IfetchInitialObj>(fetchInitialObj);
  const { loading, setLoading, error, setError, setSuccessNotification }: any = useContext(
    LayoutContext
  );

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setSuccessNotification(false);
      try {
        setLoading(true);
        const res = await (fetchObj.serviceArguments
          ? fetchObj.serviceCaller(fetchObj.serviceArguments)
          : fetchObj.serviceCaller());

        setData(res);

        !!fetchObj.onSuccess && fetchObj.onSuccess(res.data);

        fetchObj.showSuccessNotification &&
          setSuccessNotification(fetchObj.successMessage || 'request has been done successfully.');
      } catch (err) {
        !!fetchObj.onError && fetchObj.onError(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchObj && fetchObj.serviceCaller && fetchData();
  }, [fetchObj]);

  return {
    data: (data && data.data) || fetchObj.defaultValue,
    error,
    loading,
    doFetch,
  };
}

export default useFetch;
