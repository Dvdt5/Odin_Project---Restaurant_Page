

export default function contact () {
    const contactGrid = document.createElement("div");
    contactGrid.id = "contact-grid";

    const contactInfo = document.createElement("div");
    contactInfo.id = "contact-info";
    contactGrid.appendChild(contactInfo);

    const contactNumber = document.createElement("p");
    contactNumber.id = "contact-number"
    contactNumber.innerText = "Our Number: *********";
    contactInfo.appendChild(contactNumber);

    const contactMail = document.createElement("p");
    contactMail.id = "contact-mail";
    contactMail.innerText = "Our Mail Adress: *******@***";
    contactInfo.appendChild(contactMail);

    const contactLocation = document.createElement("p");
    contactLocation.id = "contact-location";
    contactLocation.innerText = "Our Location: ***********";
    contactInfo.appendChild(contactLocation);


    const messageForm = document.createElement("div");
    messageForm.id = "message-form";
    messageForm.innerHTML = 
                    `<div>
                        <label for="name-input">Your Name</label><br>
                        <input type="text" id="name-input" placeholder="Your Name Here...">
                    </div>
                    <div>
                        <label for="message-input">Your Message</label><br>
                        <textarea name="message" id="message-input" placeholder="Your Message Here..."></textarea>
                    </div>
                    <div>
                        <button id="send-contact-btn" type="button">Send Message</button>
                    </div>`;

    contactGrid.appendChild(messageForm);

    contactGrid.classList.add("fadeAnimation");

    return contactGrid;
}