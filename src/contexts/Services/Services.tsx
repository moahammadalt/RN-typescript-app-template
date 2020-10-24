import React, { createContext } from 'react';
import SomeService from '../../services/SomeService/SomeService';
import { ISomeService } from '../../services/SomeService/SomeService.interface';

interface IServices {
  SomeService: ISomeService;
}

const ServicesContext = createContext<IServices>(undefined!);

function ServicesProvider({ children }: any) {
  const initialState: any = { SomeService };

  return (
    <ServicesContext.Provider value={initialState as IServices}>
      {children}
    </ServicesContext.Provider>
  );
}

export { ServicesContext, ServicesProvider };
