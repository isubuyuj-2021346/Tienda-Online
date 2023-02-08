const mongoose = require('mongoose');

const dbConection = async() => {

    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect( process.env.MONGODB_CNN );
        console.log('Te conectaste a la base de datos');
    } catch (error) {
        console.log(error);
        throw new Error('Error al momento de conectar a la base de datos');
    }

}

module.exports = {
    dbConection
}