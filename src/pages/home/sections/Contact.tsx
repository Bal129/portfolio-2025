import type { TypeContact } from "../../../types/types";

type PropsContact = {
  contacts: TypeContact[];
}

function Contact({contacts}:PropsContact) {
  return (
    <>
    <h1 className="display-1 fw-bold c-text-primary text-center pb-5">Contacts</h1>
    <div className="d-flex flex-wrap flex-row gap-3 justify-content-md-center">
      {contacts.map((contact, index) => (
        <div key={index} className="font-monospace c-text-2 d-flex gap-3 m-3">
          <a href={contact.link} target="_blank" className="text-decoration-none">
            <div className="c-main-button c-container-light rounded-pill p-1">
              <img 
                src={contact.platform.icon}
                style={{width: "50px", height: "50px"}}
              />
            </div>
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