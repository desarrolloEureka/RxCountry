'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import favicon from '../public/assets/images/brand-logos/favicon.ico';
import Head from 'next/head';
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import Link from 'next/link';
// public/assets/images/brand-logos/desktop-white.png
import logolight from '../../../public/assets/images/brand-logos/desktop-white.png';
import user from '../../../public/assets/images/svgs/faces.svg';
import logo from '../../../public/assets/images/brand-logos/desktop-logo.png';
import { auth } from '../../../shared/firebase/firebase';
import SignUpHook from './hook/SignUpHook';
import { registerFirebase } from '../../firebase/user';
import useAuth from '@/firebase/auth';
import Spinner from '../spinner/Spinner';

const SignUp = () => {
  const { user, isLoading } = useAuth();
  const [err, setError] = useState('');
  const [data, setData] = React.useState({
    fullname: '',
    email: '',
    password: '',
  });
  const router = useRouter();
  const { email, password, fullname } = data;
  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const { registerUser } = SignUpHook();

  const handleSignUp = (e: any) => {
    const result = registerUser({ email, password });

    e.preventDefault();
  };

  useEffect(() => {
    if (user) {
      router.replace('/components/home');
    }
  }, [router, user]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='page main-signin-wrapper'>
      <Row className='signpages text-center'>
        <Col md={12}>
          <Card>
            <Row className='row-sm'>
              <Col
                lg={6}
                xl={5}
                className='d-none d-lg-block text-center bg-primary details'
              >
                <div className='mt-5 pt-4 p-2 position-absolute'>
                  <img
                    src={logolight.src}
                    className='header-brand-img mb-4'
                    alt='logo-light'
                  />
                  <div className='clearfix'></div>
                  <img
                    src={'../../../assets/images/svgs/user.svg'}
                    className='ht-100 mb-0'
                    alt='user'
                  />
                  <h5 className='mt-4 text-white'>Crea tu cuenta</h5>
                  <span className='text-white-6 fs-13 mb-5 mt-xl-0'>
                    Crea tu cuenta y administra tus cupones de manera optima y
                    eficiente.
                  </span>
                </div>
              </Col>
              <Col lg={6} xl={7} xs={12} sm={12} className='login_form '>
                <Container fluid>
                  <Row className='row-sm'>
                    <Card.Body className='mt-2 mb-2'>
                      <img
                        src={logo.src}
                        className=' d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo'
                        alt='logo'
                      />
                      <img
                        src={logolight.src}
                        className=' d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo'
                        alt='logo'
                      />
                      <div className='clearfix'></div>
                      {err && <Alert variant='danger'>{err}</Alert>}
                      <Form>
                        <h5 className='text-start mb-2'>
                          Inicia sesión en tu cuenta.
                        </h5>
                        <p className='mb-4 text-muted fs-13 ms-0 text-start'>
                          Inicia sesión y administra tus cupones de manera
                          optima y eficiente.
                        </p>
                        <Form.Group
                          className='text-start form-group'
                          controlId='formEmail'
                        >
                          <Form.Label>Correo</Form.Label>
                          <Form.Control
                            className='form-control'
                            placeholder='Enter your email'
                            name='email'
                            type='text'
                            value={email}
                            onChange={changeHandler}
                            required
                          />
                        </Form.Group>
                        <Form.Group
                          className='text-start form-group'
                          controlId='formpassword'
                        >
                          <Form.Label>Contraseña</Form.Label>
                          <Form.Control
                            className='form-control'
                            placeholder='Enter your password'
                            name='password'
                            type='password'
                            value={password}
                            onChange={changeHandler}
                            required
                          />
                        </Form.Group>
                        <Button
                          onClick={handleSignUp}
                          className='btn ripple btn-main-primary btn-block mt-2'
                        >
                          Inisiar Sesión
                        </Button>
                      </Form>
                      <div className='text-start mt-5 ms-0'>
                        <div className='mb-1'>
                          <Link href='#!'> Has olvidado tu contraseña ?</Link>
                        </div>
                        <div>
                          {/* {`Don't`} */}
                          No tienes una cuenta registrada?
                          <Link href={`/components/authentication/signup/`}>
                            {' '}
                            Register Here
                          </Link>
                        </div>
                      </div>
                    </Card.Body>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
