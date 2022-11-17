import { MongoClient } from 'mongodb';
import { MONGODB_URL } from '../configs.js';

const client = new MongoClient(MONGODB_URL);

async function connectDatabase() {
    try {
        await client.connect(); 
        console.log('Database connection done');
    } catch (error) {
        console.log('Database connection ERROR', error);
    }
}

export default connectDatabase;