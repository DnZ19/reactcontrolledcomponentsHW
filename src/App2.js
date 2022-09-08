import React from 'react';
import {useForm} from "react-hook-form";
import './App.css';




function App2() {

    // const [nameValue, setNameValue] = React.useState('');
    // const [ageValue, setAgeValue] = React.useState('');
    // const [messageValue, setMessageValue] = React.useState('');
    //    const [newsletterClicked, toggleNewsletterClicked] = React.useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function onFormSubmit( data ) {
        //console.log("clicked!")
        //event.preventDefault();
        //console.log(nameValue, ageValue, messageValue, newsletterClicked);
        console.log(data);

        reset();

    }

    // console.log('ERRORS', errors);

        return  (
        <>
            <form
                className="container"
                onSubmit={handleSubmit(handleSubmit(onFormSubmit))}

            >

                <fieldset id="info-area">
                    <legend>Information</legend>

                    <input
                        id="first-name"
                        type="text"
                        {...register("name", {
                            required: true,
                            minLength:  {
                                value: 3,
                                message: "Name needs to be longer then 3 characters"
                            }
                        })}
                        placeholder="Name"
                        // value={nameValue}
                        // onChange={(e) => setNameValue(e.target.value)}

                    />

                    <input
                        id="age"
                        type="number"
                        {...register("age", {
                            max: {
                                value: 80,
                                message: "You can't be over 80",
                        }
                        })}
                        placeholder="Age"
                        // value={ageValue}
                        // onChange={(e) => setAgeValue(e.target.value)}

                    />

                </fieldset>

                <fieldset id="text-area">
                    <legend>Your review</legend>

                    <textarea
                        id="message"
                        cols="100%"
                        rows="6"
                        {...register("message", {
                            maxLength: {
                                value: 50,
                                message: "You have to much text"
                            }
                        })}
                        placeholder="Message"
                        // value={messageValue}
                        // onChange={(e) => setMessageValue(e.target.value)}

                    ></textarea>

                    <p>
                        <input
                            id="checkbox"
                            type="checkbox"
                            {...register("checkbox", {
                                required:   {
                                    value: true,
                                    message: "You need to subscribe"
                                }
                            })}
                            // checked={newsletterClicked}
                            // onChange={() => toggleNewsletterClicked(!newsletterClicked)}


                        />
                        I want to subscribe for the newletter!


                    </p>

                    {errors.name && <p>{errors.name.message}</p>}
                    {errors.age && <p>{errors.age.message}</p>}
                    {errors.message && <p>{errors.message.message}</p>}
                    {errors.checkbox && <p>{errors.checkbox.message}</p>}

                </fieldset>



                <button
                    type='submit'
                    //disabled={!newsletterClicked}



                >Submit</button>

            </form>

        </>
    )
}

export default App2;