export default function Contact() {
  return (
    <div class='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h2 className='text-center text-dark mt-4'>Contact us</h2>
          <div className='text-center mb-5 text-dark'>
            <p className='description'>
              Feel free to contact us if you need any assistance, any help or
              another question.
            </p>
          </div>
          <div className='card my-5'>
            <form className='card-body cardbody-color p-lg-5'>
              <div className='text-center'>
                <img
                  src='https://cdn-icons.flaticon.com/png/512/5825/premium/5825936.png?token=exp=1652448633~hmac=d8f8c15102f4d882adb6525c25e1d581'
                  className='img-fluid  img-thumbnail border-0 my-4'
                  width='150px'
                  alt='profile'
                />
              </div>

              <div className='mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='Use className'
                  aria-describedby='nameHelp'
                  placeholder='Name'
                />
              </div>
              <div className='mb-3'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='mb-3'>
                <textarea
                  id='message'
                  className='form-control  form-text-area h-25'
                  rows={5}
                  cols={30}
                  placeholder='Message'
                  required
                  defaultValue={''}
                />
              </div>
              <div className='text-center mb-3'>
                <button
                  type='submit'
                  className='btn btn-outline-dark py-3 mb-5 w-50'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
