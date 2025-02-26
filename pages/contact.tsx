import React, { useState, type JSX } from "react";
import Head from "next/head";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { SectionTitle, Layout, Loader } from "../components";
import database from "../data/database";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INIT_FORM_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const isValidEmail = (string: string) => {
  const regexp = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,15})+$/;
  return regexp.test(string);
};

export default function Contact() {
  const { phoneNumbers, emailAddress, address } = database.contactInfo;

  const [formData, setFormData] = useState<ContactForm>(INIT_FORM_STATE);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<undefined | string>("");
  const [formState, setFormState] = useState<
    "ready" | "loading" | "sent" | "fail"
  >("ready");

  const loadError = (msg: string) => {
    setError(true);
    setMessage(msg);
    setFormState("ready");
  };

  const submitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setFormState("loading");
    setError(false);
    setMessage("");

    if (formState === "sent") {
      setMessage("");
      setFormData(INIT_FORM_STATE);
      setFormState("ready");
      return;
    }

    if (!formData.name) {
      return loadError("Name is required.");
    }
    if (formData.name.length < 2) {
      return loadError("At least share your initials, please...");
    }
    if (!formData.email) {
      return loadError("Email is required.");
    }
    if (!isValidEmail(formData.email) || formData.email.length < 9) {
      return loadError("Provide a valid email address.");
    }
    if (formData.email.length < 10) {
      return loadError("Is this really your email? Looks a bit too short...");
    }
    if (!formData.subject) {
      return loadError("Subject is required.");
    }
    if (!formData.message) {
      return loadError("Message is required.");
    }

    // If no errors, send a message
    await sendMessage(formData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const sendMessage = async (formData: ContactForm) => {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormState("sent");
      setMessage("Message sent successfully!");
    } else {
      setError(true);
      setMessage("Something went wrong, please try again later..");
      setFormState("fail");
    }
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <Layout>
      <Head>
        <title>akds : contact</title>
        <meta name="description" content="Arkadiusz contact page" />
      </Head>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <SectionTitle title="Contact Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-form-wrapper">
                <h4>Get In Touch</h4>
                <form
                  action="#"
                  className="mi-form mi-contact-form"
                  onSubmit={submitHandler}
                >
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">What&#39;s your name?*</label>
                    <input
                      required
                      onChange={handleChange}
                      type="text"
                      name="name"
                      id="contact-form-name"
                      value={formData.name}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-email">
                      Email*
                    </label>
                    <input
                      required
                      onChange={handleChange}
                      type="text"
                      name="email"
                      id="contact-form-email"
                      value={formData.email}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">
                      Subject*
                    </label>
                    <input
                      required
                      onChange={handleChange}
                      type="text"
                      name="subject"
                      id="contact-form-subject"
                      value={formData.subject}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">
                      Message*
                    </label>
                    <textarea
                      required
                      onChange={handleChange}
                      name="message"
                      id="contact-form-message"
                      cols={30}
                      rows={6}
                      value={formData.message}
                    />
                  </div>
                  <div className="mi-form-field">
                    <button
                      className="mi-button"
                      style={{ marginRight: 10 }}
                      type="submit"
                      disabled={formState === "loading"}
                    >
                      {formState === "ready"
                        ? "Send mail"
                        : formState === "loading"
                        ? "Sending.."
                        : formState === "fail"
                        ? "Try again"
                        : "Reset"}
                    </button>
                    {formState === "loading" && <Loader />}
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-contact-info">
                {phoneNumbers && (
                  <div className="mi-contact-info-block">
                    <span className="mi-contact-info-block-icon">
                      <PhoneIcon />
                    </span>
                    <div className="mi-contact-info-block-content">
                      <h6>Phone</h6>
                      {phoneNumbers.map(
                        (phoneNumber: string): JSX.Element => (
                          <p key={phoneNumber}>{phoneNumber}</p>
                        )
                      )}
                    </div>
                  </div>
                )}
                {emailAddress && (
                  <div className="mi-contact-info-block">
                    <span className="mi-contact-info-block-icon">
                      <EmailIcon />
                    </span>
                    <div className="mi-contact-info-block-content">
                      <h6>Email</h6>
                      {emailAddress.map(
                        (email: string): JSX.Element => (
                          <p key={email}>{email}</p>
                        )
                      )}
                    </div>
                  </div>
                )}
                {address && (
                  <div className="mi-contact-info-block">
                    <span className="mi-contact-info-block-icon">
                      <PinDropIcon />
                    </span>
                    <div className="mi-contact-info-block-content">
                      <h6>Address</h6>
                      <p>{address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
