import { Storage } from '@ionic/storage';

let storage;

const initializeStorage = async () => {
    storage = new Storage();
    await storage.create();
};

export { storage, initializeStorage };
