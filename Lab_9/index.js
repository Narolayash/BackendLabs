// 1. Install Mongoose library using NPM. (A)
// npm intall mongoose  
const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json());

// 2. Demonstrate the use mongoose functions. (A)
// 1)  mongoose.connect() -> Connects Node app to MongoDB
// 2) new mongoose.Schema() -> Defines structure of documents
// 3) mongoose.model() -> Creates a Model
const db_url = "mongodb://localhost:27017/lab_9_db";
mongoose.connect(db_url)
    .then(() => console.log("Database Connected!"))
    .catch(err => console.error("Connection error : ", err));


//----- for faculty -----
const FacultySchema = new mongoose.Schema({
    name: String,
    department: String,
    hireDate: { type: Date, default: Date.now}
});
const Faculty = mongoose.model('Faculty', FacultySchema);

//----- for student -----
const StudentSchema = new mongoose.Schema({
    name: String,
    age: { type: Number, validate:Number.isInteger },
    spi: Number
});
const Student = mongoose.model('Student', StudentSchema);

// ----- for product -----
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    mDate: { type: Date, default: Date.now }
});
const product = mongoose.model('Product', ProductSchema);



app.post('/api/faculty/add', async (req, res) => {
    try {
        const newFaculty = new Faculty(req.body);
        const savedFaculty = await newFaculty.save();
        res.status(201).json(savedFaculty);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/api/faculty', async (req, res) => {
    try {
        const faculties = await Faculty.find();
        if (!faculties) res.send("Faculty mate jagya khali chhe");
        res.json(faculties);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/api/faculty/:id', async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.id);
        if(!faculty) return res.status(404).send("Faculty Not Found!");
        res.json(faculty);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(3000 ,() => {
    console.log("Sever Chalu chhe bhai!!!");
});