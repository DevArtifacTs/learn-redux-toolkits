// This is a backend system mockup 

export const users = [
    {
        id: 'a',
        username: 'Somsak',
        email : 'somsak@gmail.com',
        password: 'abc123',
    },
    {
        id: 'b',
        username: 'Wanchai',
        email : 'wanchai@gmail.com',
        password: '123abc',
    },
]

// API for users
//search user by email and password if exist return user
export function signin(email, password) {
    return new Promise((resolve, reject) => {
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      )
  
      setTimeout(() => {
        if (foundUser) {
          resolve(foundUser)
        } else {
          reject('Email or password is invalid')
        }
      }, 3000)
    })
  }