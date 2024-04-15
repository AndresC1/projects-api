const { MongoClient, ObjectId } = require('mongodb');

class MongoDB {
    constructor(url, dbName, dbUser, dbPassword) {
        if(!MongoDB.instance){
            this.url = url;
            this.dbName = dbName;
            this.username = dbUser;
            this.password = dbPassword;
            this.connect();
            MongoDB.instance = this;
        }
        return MongoDB.instance;
    }

    async connect() {
        try {
            this.client = new MongoClient(this.url, {
                auth: {
                    username: this.username,
                    password: this.password
                }
            });
            await this.client.connect();
            console.log('Conexión a MongoDB exitosa');
            this.db = this.client.db(this.dbName);
        } catch (error) {
            console.error('Error de conexión a MongoDB:', error);
            throw error;
        }
    }

    async disconnect() {
        try {
            await this.client.close();
            console.log('Desconexión de MongoDB exitosa');
        } catch (error) {
            console.error('Error al cerrar la conexión con MongoDB:', error);
            throw error;
        }
    }

    async insertOne(collectionName, document) {
        try {
            const result = await this.db.collection(collectionName).insertOne(document);
            return result.insertedId;
        } catch (error) {
            console.error('Error al insertar documento en MongoDB:', error);
            throw error;
        }
    }

    async findOne(collectionName, query) {
        try {
            return await this.db.collection(collectionName).findOne(query);
        } catch (error) {
            console.error('Error al buscar documento en MongoDB:', error);
            throw error;
        }
    }

    async findById(collectionName, id) {
        try {
            return await this.db.collection(collectionName).findOne({ _id: ObjectId(id) });
        } catch (error) {
            console.error('Error al buscar documento por ID en MongoDB:', error);
            throw error;
        }
    }

    async findAll(collectionName) {
        try {
            return await this.db.collection(collectionName).find({}).toArray();
        } catch (error) {
            console.error('Error al obtener todos los elementos:', error);
            throw error;
        }
    }

    async updateOne(collectionName, filter, update) {
        try {
            const result = await this.db.collection(collectionName).updateOne(filter, { $set: update });
            return result.modifiedCount;
        } catch (error) {
            console.error('Error al actualizar documento en MongoDB:', error);
            throw error;
        }
    }

    async deleteOne(collectionName, filter) {
        try {
            const result = await this.db.collection(collectionName).deleteOne(filter);
            return result.deletedCount;
        } catch (error) {
            console.error('Error al eliminar documento en MongoDB:', error);
            throw error;
        }
    }
}

module.exports = {
    MongoDB
};