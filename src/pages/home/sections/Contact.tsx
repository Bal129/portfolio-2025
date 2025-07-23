import type { TypeContact } from "../../../types/types";

type PropsContact = {
  contacts: TypeContact[];
}

function Contact({contacts}:PropsContact) {
  return (
    <>
    <h1 className="text-center p-5">Contacts</h1>
    <div className="d-flex flex-wrap flex-row gap-3 justify-content-md-center">
      {contacts.map((contact, index) => (
        <div key={index} className="d-flex gap-3 m-3">
          <a href={contact.link} target="_blank" className="text-decoration-none">
            <img 
              src={contact.platform.icon}
              style={{width: "50px", height: "50px"}}
            />
          </a>
          <div>
            <h4>{contact.platform.name}</h4>
            <p>{contact.username}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Contact;