import React, { useState } from "react";
import Popup from './Popup';

const BookingForm = ({language, image}) => {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      course: language
    });
    const [isPopupVisible, setPopupVisible] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Define your Telegram bot token and chat ID
      const telegramBotToken = "7285226351:AAGAYD4LGNbjzq6quaCErrqBwugip4c-rTM";
      const chatId = "-4514632442";
  
      // The message you want to send
      const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse: ${formData.course}`;
  
      // Telegram API URL
      const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
  
      try {
        // Sending data to Telegram
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        });
      } catch (error) {
        console.error("Error sending message to Telegram:", error);
      }

      // Simulate form submission
    setTimeout(() => {
      setPopupVisible(true);
    }, 500);
  };

  const closePopup = () => {
    setPopupVisible(false);
    };

  return (
    <section id="courses" className="py-10 mx-5 sm:mx-auto ">
      <div className="container mx-auto sm:max-w-screen-md ">
        <form onSubmit={handleSubmit} className="sm:mx-44 mx-auto mt-16 rounded-xl border-greyshadow border-2 py-8 px-5 sm:px-8">
          <div className='mb-6 flex justify-center'>
            <h1 className='text-primary sm:text-3xl text-xl font-bold'>Join Us Now !</h1>
            
          </div>
          <div className="h-10 flex justify-center mb-5">
              <img src={image} alt="" className="h-full rounded-sm"/>
            </div>
        <div className="mb-5">
            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Full Name" required />
        </div>
        <div className="mb-5">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required />
        </div>
        <div className='sm:flex justify-between'>
        <div className="mb-5 sm:mr-3">
            <label for="Phone" className="block mb-2  text-sm font-medium text-gray-900 dark:text-white">Your Phone</label>
            <input type="text" name="phone" id="Phone" value={formData.phone} onChange={handleChange} className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Phone" required />
        </div>
        <div className="mb-6">
            <label for="Course" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course</label>
            <input type="text" name="course" id="course" value={formData.course} onChange={handleChange} className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white text-gray-900" placeholder="Course" disabled />
            {/* <select name="course" id="course" value={formData.course} onChange={handleChange} class="text-sm text-grey rounded-lg block w-full p-2.5" >
                  <option className='text-grey' value="none">Select</option>
                  <option value="ENGLISH COURS">ENGLISH COURS</option>
                  <option value="GERMAN COURS">GERMAN COURS</option>
                  <option value="FRENSH COURS">FRENCH COURS</option>
                  <option value="SPANISH COURS">SPANISH COURS</option>
                </select> */}
        </div>
        </div>
        <div className=''>
        <button type="submit" className="text-white bg-primary mt-3 sm:mt-0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-2/5 px-5 py-2.5 text-center ">Book Now !</button>
        </div>
        </form>
        <Popup
        isVisible={isPopupVisible}
        message="Your form has been successfully submitted!"
        onClose={closePopup}
      />
      </div>
    </section>
  );
};

export default BookingForm;
