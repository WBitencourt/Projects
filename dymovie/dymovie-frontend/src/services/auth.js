export function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'jvbvodnfdonbdofbdfb',
        user: {
          name: 'Wendell',
          email: 'wendell@wendell.com.br',
        },
      });
    }, 2000);
  });
}
