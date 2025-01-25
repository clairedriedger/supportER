import React, {useEffect} from 'react';
import axios from "axios";
//testing firebase
//import { createUserWithEmailAndPassword } from "firebase/auth";
//import { auth, app } from "../firebase";

const RegisterPage = () => {
    useEffect(() => {
        const testingDB = async () => {
            try {
                const userData = {
                    email: "test_email.321",
                    name: "Anna Wong",
                };
                const response = await axios.post("http://localhost:3001/api/users/register", userData);
                console.log("Raw response from backend:", response.data);

            } catch (error) {
                console.error("Error registering user:", error.message);
                alert("Registration failed. Please try again.");
            }
        };

        //testing firebase
        /*const testFirebaseClient = () => {
            console.log("Firebase app initialized:", app.name); // Should log "[DEFAULT]"
        };*/

        // execute
        testingDB();
        //testFirebaseClient(); //testing firebase
    });

    return(
        <div className="bg-red-50">
            <p class="text-red-50">TEST TEST</p>
        </div>
    );

};
export default RegisterPage;