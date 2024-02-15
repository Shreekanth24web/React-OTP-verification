import React, { useState } from 'react'


const Otp = () => {

      const [otp, setOtp] = useState()

      const [verifyOtp, setVerifyOtp] = useState()

      const otpGenerator = () => {

            let otp = Math.floor(Math.random() * 10000)
            if (otp >= 1000 && otp <= 10000) {
                  setOtp(otp.toString())
            } else {
                  return otp;
            }
      }

      const handleVerifyOtp = () => {
             if(verifyOtp ===''){
                  alert("Please Enter your OTP")
            }
            else if(otp === verifyOtp){
                  alert("OTP is Successfuly verified!")
                  setOtp('')
                  setVerifyOtp('')
            }
            else{
                  alert("you enter wrong OTP! please try again :) ")
                  setVerifyOtp('')

            }
      }

      return (
            <div className='body'>
                  <div className='otp-form'>
                        <button onClick={ otpGenerator } className='btn btn-primary fw-bold mt-5'>
                              OTP-Generator
                        </button>

                        <div className='otp m-4'>
                              <h2>{otp}</h2>
                        </div>

                        <div>
                              <div className='m-5 otp-verify'>
                                    <h2> verify - OTP</h2>
                                    <div className='otp-input'>
                                          <input className='form-control' type="text" placeholder='Enter OTP' value={verifyOtp} onChange={(e) => { setVerifyOtp(e.target.value) }} />

                                    </div>
                              </div>

                        </div>

                        <div className='verify-btn mt-1'>
                              <button onClick={ handleVerifyOtp} className=''>OTP Verification</button>
                        </div>
                  </div>
            </div>
      )
}

export default Otp