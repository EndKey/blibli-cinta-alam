var routes = [
  {
    method: 'GET',
    url: '/backend/member/profile',
    response: {
      code: 200,
      status: 'OK',
      data: {
        name: 'Rizki',
        username: 'userrizki@gmail.com',
        birthDate: '1996-08-30',
        handphone: '08171717111',
        handphoneVerified: true,
        gender: 'F',
        email: 'userrizki@gmail.com',
        notification: 'WhatsApp',
        loginEmail: 'userrizki@gmail.com',
        subscription: {
          email: true
        },
        recoveryContact: {
          type: 'PHONE_NUMBER',
          value: '123456789'
        }
      }
    }
  }
]

export default routes
