import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../partials/Header';
import Input from "../components/form/Input/Input";
import {Button} from "../components/form/Button/Button";
import {Separator} from "../components/form/Separator/Separator";
import {GoogleButton} from "../components/form/Button/GoogleButton";
function SignIn() {

  return (

      <div className="flex flex-col min-h-screen overflow-hidden">

          {/*  Site header */}
          <Header />

          {/*  Page content */}
          <main className="flex-grow">

              <section className="bg-gradient-to-b from-gray-100 to-white">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6">
                      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                          {/* Page header */}
                          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                              <h1 className="h1">Welcome Back👋</h1>
                          </div>
                          {/* Form */}
                          <div className="max-w-sm mx-auto">
                              <form>
                                  <Input label={'Email'}  name={'email'} type={'text'} id={name} />
                                  <Input label={'Password'}  name={'Password'} type={'password'} id={name} />
                                  <Button value={'Sign Up'}/>
                              </form>
                              <Separator/>
                              <GoogleButton/>
                              <div className="text-gray-600 text-center mt-6">
                                  Already using Simple? <Link to="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

          </main>

      </div>


  );
}

export default SignIn;