import React from 'react';
import './App.css';

function App() {

    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState('');
    const [messageValue, setMessageValue] = React.useState('');
    const [checkedNewsletter, toggleCheckedNewsLetter] = React.useState(false)
    const [clicked, toggleClicked] = React.useState(false);

    function handleSubmit(event) {
        console.log("submitted");
        console.log(nameValue, ageValue, messageValue)
        toggleClicked(!clicked);
        event.preventDefault();


    }


    return (
    <div className="container">
        <form
            onSubmit={handleSubmit}
        >
            <fieldset id="info-area">
                <legend>Information</legend>

                        <label id="first-name">Name: </label>
                        <input
                            type="text"
                            id="first-name"
                            placeholder="Enter your name here"
                            name="name"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}

                        />

                        <label id="age">Age: </label>
                        <input
                            type="text"
                            id="age"
                            placeholder="Enter your age here"
                            name="age"
                            value={ageValue}
                            onChange={(e) => setAgeValue(e.target.value)}

                        />


            </fieldset>

            <fieldset id="review-area">
                <legend>Your review</legend>

                    <label id="message">Message:</label>
                    <textarea
                        cols="100%"
                        rows="6"
                        id="message"
                        placeholder="What did you think of the recepy?"
                        name="message"
                        value={messageValue}
                        onChange={(e) => setMessageValue(e.target.value)}

                    ></textarea>
                    {messageValue.length > 100 && <p className="error-message">This message is to long!</p>}

                    <p><input
                        type="checkbox"
                        name="newsletter"
                        checked={checkedNewsletter}
                        onChange={() => toggleCheckedNewsLetter(!checkedNewsletter)}

                    /> I want to subscribe for the newsletter.</p>


                    <button
                        type="submit"
                        disabled={!checkedNewsletter}




                    >Submit</button>
            </fieldset>

        </form>

    </div>


  );
}

export default App;
