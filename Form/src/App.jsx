import { useState } from 'react'
import './App.css'
function App() {
  /* state value*/
  const [form, setForm] = useState({
    name: "", email: "", description: "", country: "USA", gender: "", agree: false
  })
  const onChange = (e) => {
    const { value, type, checked, name } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form Data:', form);
  }
  return (
    <div className='container'>
      <div className='formImage'></div>
      <form onSubmit={handleSubmit}>
        <h1>Register to order</h1>
        <div className='inputfield'>
          <div className="mb-3">
            <input type="text" name="name" value={form.name} onChange={onChange} className="form-control" id="name" placeholder="name" />
          </div>
          <div className="mb-3">

            <input type="email" name="email" value={form.email} onChange={onChange} class="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div className="mb-3">

            <input type="text" name="description" value={form.description} onChange={onChange} className="form-control" id="description" placeholder="description" />
          </div >
          <select className="form-select" name="country" onChange={onChange} value={form.country} aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="UK">UK</option>
            <option value="nigeria">Nigeria</option>
          </select>
          <div className='mb-3'>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="gender">
                Gender:
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" value="male" onChange={onChange} />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" value="female" onChange={onChange} />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" value="others" onChange={onChange} />
              <label className="form-check-label" htmlFor="others">
                Others
              </label>
            </div>
          </div>
          <div className="mb-3 d-inline-flex align-items-center">
            <label className="form-check-label me-2" htmlFor="agree">
              Agree:
            </label>
            <input
              type="checkbox"
              name="agree"
              id="checkDefault"
              checked={form.agree}
              onChange={onChange}
              className="form-check-input" />
          </div>
        </div>
        <button type="submit" className='btn btn-lg btn-success'>Submit</button>
      </form >

    </div >

  )
}

export default App
