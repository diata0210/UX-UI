import React, { FC, useMemo } from "react";

export interface State {
  displaySidebar: boolean;
  displayModal: boolean;
  sidebarExpanded: boolean;
  modalData: any;
  modalView: string;
}

const initialState = {
  displaySidebar: false,
  displayModal: false,
  sidebarExpanded: true,
  modalView: "LOGIN_VIEW",
  modalData: null,
};

type Action =
  | {
      type: "OPEN_SIDEBAR";
    }
  | {
      type: "CLOSE_SIDEBAR";
    }
  | {
      type: "EXPAND_SIDEBAR";
  }
  | {
      type: "COLLAPSE_SIDEBAR";
  }
  | {
      type: "OPEN_MODAL";
    }
  | {
      type: "CLOSE_MODAL";
    }
  | {
      type: "SET_MODAL_VIEW";
      view: MODAL_VIEWS;
    }
  | {
      type: "SET_MODAL_DATA";
      data: MODAL_DATA;
    };

type MODAL_VIEWS =
  | "SIGNUP_VIEW"
  | "LOGIN_VIEW"
  | "FORGOT_VIEW"
  | "DELETE_PRODUCT"
  | "BAN_CUSTOMER";
type MODAL_DATA = any;

export const UIContext = React.createContext<State | any>(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_SIDEBAR": {
      return {
        ...state,
        displaySidebar: true,
      };
    }
    case "CLOSE_SIDEBAR": {
      return {
        ...state,
        displaySidebar: false,
      };
    }
    case "EXPAND_SIDEBAR": {
      return {
        ...state,
        sidebarExpanded: true,
      };
    }
    case "COLLAPSE_SIDEBAR": {
      return {
        ...state,
        sidebarExpanded: false,
      };
    }
    case "OPEN_MODAL": {
      return {
        ...state,
        displayModal: true,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        displayModal: false,
      };
    }
    case "SET_MODAL_VIEW": {
      return {
        ...state,
        modalView: action.view,
      };
    }
    case "SET_MODAL_DATA": {
      return {
        ...state,
        modalData: action.data,
      };
    }
  }
}

export const UIProvider: FC = ({ children }: any) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });
  const expandSidebar = () => dispatch({ type: "EXPAND_SIDEBAR" });
  const collapseSidebar = () => dispatch({ type: "COLLAPSE_SIDEBAR" });
  const toggleSidebar = () =>
    state.displaySidebar
      ? dispatch({ type: "CLOSE_SIDEBAR" })
      : dispatch({ type: "OPEN_SIDEBAR" });
  const toggleExpandCollapseSidebar = () =>
    state.sidebarExpanded
      ? dispatch({ type: "COLLAPSE_SIDEBAR" })
      : dispatch({ type: "EXPAND_SIDEBAR" });
  const closeSidebarIfPresent = () =>
    state.displaySidebar && dispatch({ type: "CLOSE_SIDEBAR" });

  const openModal = () => dispatch({ type: "OPEN_MODAL" });
  const closeModal = () => dispatch({ type: "CLOSE_MODAL" });

  const setModalView = (view: MODAL_VIEWS) =>
    dispatch({ type: "SET_MODAL_VIEW", view });
  const setModalData = (data: MODAL_DATA) =>
    dispatch({ type: "SET_MODAL_DATA", data });

  const value = useMemo(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
      expandSidebar,
      collapseSidebar,
      toggleExpandCollapseSidebar,
      openModal,
      closeModal,
      setModalView,
      setModalData,
    }),
    [state]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};