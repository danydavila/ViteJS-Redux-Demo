/* eslint-disable no-var */
// extend the global object
declare global {
  interface Document {
    attachEvent(event: string, listener: EventListener): boolean
  }

  type ReduxPageState = {
    type: string;
  }

  interface Window {
    google_tag_manager?: object[];
    dataLayer?: object[];
    ga?: {
      getByName(name: string): any;
      getAll(): any[];
    };
  }
}

export { }
