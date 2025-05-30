import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const location = useLocation();
  const isNotFoundPage = ![
    "/",
    "/about-us",
    "/contact-us",
    "/terms",
    "/privacy",
  ].includes(location.pathname);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

    const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
const [selectedOption, setSelectedOption] = useState("General Inquiry"); // Default selection

    const validateForm = () => {
    let newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(emailPattern)) newErrors.email = "Enter a valid email";
    if (!formData.details.trim()) newErrors.details = "Details are required";

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateForm();
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      const { name, email, details } = formData;
      const mailtoUrl = `mailto:contact@dayempire.co.uk?subject=${encodeURIComponent(selectedOption)}%20-%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0D%0AEmail:%20${encodeURIComponent(email)}%0D%0ACard%20Bulk%20Details:%0D%0A${encodeURIComponent(details)}`;

      window.location.href = mailtoUrl;
    }
  };

  return (
    <>
      <div
        id="SellCards"
        className="relative flex mx-8 sm:mx-16 sm:justify-center"
      >
        {!isNotFoundPage && (
          <>
            <div className="hidden lg:inline absolute -left-50 top-10">
              <img
                src="/large-pikachu-tilt.webp"
                width={569}
                height={696}
                className="w-0 xl:w-[400px] 2xl:w-[569px]"
                alt="Image shows a Pikachu Pokemon card"
              />
            </div>
            <div className="hidden lg:inline absolute -right-60 top-100">
              <img
                src="/pokemon-stacked-cards.webp"
                width={581}
                height={703}
                className="w-0 xl:w-[400px] 2xl:w-[581px]"
                alt="Image shows stacked Pokemon cards"
              />
            </div>
          </>
        )}

        {isNotFoundPage && (
          <>
            <div className="hidden lg:inline absolute -left-50 top-10">
              <img
                src="/team-rocket.webp"
                width={569}
                height={696}
                className="w-0 xl:w-[400px] 2xl:w-[600px]"
                alt="Image shows Team Rocket Leader"
              />
            </div>
            <div className="hidden lg:inline absolute -right-60 top-10">
              <img
                src="/persian.webp"
                width={569}
                height={696}
                className="w-0 xl:w-[400px] 2xl:w-[600px]"
                alt="Image shows Team Rocket Leader Persian"
              />
            </div>
          </>
        )}

        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-6 text-center lg:pt-16 lg:pb-16">
          <h2 className="mx-auto max-w-5xl font-bold font-display text-3xl tracking-tight text-black sm:text-5xl">
            Get in touch with us
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
            Getting in touch with us is easy! Whether you have a question about
            a specific card or just want to connect, we're here for collectors,
            fans, and sellers alike. Reach out today!
          </p>
        </div>
      </div>

      <div className="flex mx-8 mb-20 sm:mx-16 justify-center lg:mb-32">
        <form
  id="ContactForm"
  className="w-xl"
  method="POST"
  encType="multipart/form-data"
  onSubmit={handleSubmit}
>

  <div className="w-full mb-6">
        <label htmlFor="inquiryType" className="py-2">Inquiry Type</label>
        <select id="inquiryType" name="inquiryType" className="border-1 w-full border-gray-300 p-3" onChange={handleSelectChange}>
          <option value="Buying Enquiries">Buying Enquiries</option>
          <option value="Selling Enquiries">Selling Enquiries</option>
          <option value="Custom Orders">Business Enquiries</option>
        </select>
 </div>

  <div className="w-full mb-6">
    <label htmlFor="name" className="py-2">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      required
      className="border-1 w-full border-gray-300 p-3"
      onChange={handleChange}
    />
    {errors.name && <small className="text-red-500">{errors.name}</small>}
  </div>

  <div className="w-full mb-6">
    <label htmlFor="email" className="py-2">
      Email
    </label>
    <input
      type="text"
      id="email"
      name="email"
      required
      className="border-1 w-full border-gray-300 p-3"
      onChange={handleChange}
    />
    {errors.email && <small className="text-red-500">{errors.email}</small>}
  </div>

  <div className="w-full mb-6">
    <label htmlFor="details" className="py-2">
      Message
    </label>
    <textarea
      rows="8"
      id="details"
      name="details"
      required
      className="border-1 w-full border-gray-300 p-3"
      onChange={handleChange}
    ></textarea>
    {errors.details && <small className="text-red-500">{errors.details}</small>}
  </div>

  <a
  href={`mailto:contact@dayempire.co.uk?subject=Bulk%20Card%20Sale%20Enquiry%20-%20${encodeURIComponent(formData.name)}&body=Name:%20${encodeURIComponent(formData.name)}%0D%0AEmail:%20${encodeURIComponent(formData.email)}%0D%0ACard%20Bulk%20Details:%0D%0A${encodeURIComponent(formData.details)}`}
  className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center px-6 py-3 bg-black rounded-lg hover:bg-gray-700 text-white"
>
  Enquire Today
</a>

</form>
      </div>
    </>
  );
};

export default ContactForm;
