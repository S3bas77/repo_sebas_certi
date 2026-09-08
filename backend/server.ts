import express from "express";
const app = express();
const PORT = 3000;
app.get("/saludo", (req, res) => {
    res.send("Hola desde el servidor");
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})