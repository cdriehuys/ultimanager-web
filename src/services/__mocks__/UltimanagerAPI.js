const UltimanagerAPI = jest.genMockFromModule('../UltimanagerAPI').default;


UltimanagerAPI.login.mockImplementation(() => Promise.resolve({ token: 'token' }));

UltimanagerAPI.register.mockImplementation(data => Promise.resolve({ email: data.email }));


export default UltimanagerAPI;
