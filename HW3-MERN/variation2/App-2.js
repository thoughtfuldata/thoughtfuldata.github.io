import { useState } from 'react'
function App() {
    const [coursename, setName] = useState("");
    const [instructor, setInstructor] = useState("");
    const [rating, setRating] = useState("");
    const handleOnSubmit = async (e) => {
        alert("Sending " + JSON.stringify({ coursename, instructor, rating }));
        e.preventDefault();
        let result = await fetch(
            'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ coursename, instructor, rating }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved successfully");
            setInstructor("");
            setName("");
            setRating("");
        }
    }
    return (
        <>
            <h1>This is a React WebApp </h1>
            <form action="">
                <input type="text" placeholder="Course Name"
                    value={coursename} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Instructor"
                    value={instructor} onChange={(e) => setInstructor(e.target.value)} />
                <input type="number" placeholder="Rating"
                    value={rating} onChange={(e) => setRating(e.target.value)} />
                <button type="submit"
                    onClick={handleOnSubmit}>Submit</button>
            </form>

        </>
    );
}

export default App;



