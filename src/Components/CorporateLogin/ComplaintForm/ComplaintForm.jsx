// import { useState } from "react"
// import styles from "./styles.module.scss"

// const ComplaintForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     complaint: "",
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     console.log("Form Data:", formData)
//     try {
//       const response = await fetch("https://filterr.net/api/complaints", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       })
//       const data = await response.json()
//       console.log("Complaint submitted successfully:", data)
//     } catch (error) {
//       console.error("There was an error submitting the complaint:", error)
//     }
//   }

//   return (
//     <div className={styles.formContainer}>
//       <h1 className={styles.formTitle}>قدم شكوتك الآن</h1>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.formGroup}>
//           <label htmlFor="fullName" className={styles.formLabel}>
//             الاسم الكامل *
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className={styles.formInput}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="phone" className={styles.formLabel}>
//             رقم الهاتف *
//           </label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className={styles.formInput}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="email" className={styles.formLabel}>
//             البريد الإلكتروني *
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={styles.formInput}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="complaint" className={styles.formLabel}>
//             اكتب مشكلتك باختصار - سطر أو اثنين *
//           </label>
//           <textarea
//             id="complaint"
//             name="complaint"
//             value={formData.complaint}
//             onChange={handleChange}
//             className={styles.formTextarea}
//             required
//           />
//         </div>
//         <button type="submit" className={styles.formButton}>
//           إرسال
//         </button>
//       </form>
//     </div>
//   )
// }

// export default ComplaintForm
