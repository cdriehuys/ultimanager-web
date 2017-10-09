const UltimanagerAPI = jest.genMockFromModule('../UltimanagerAPI').default;


UltimanagerAPI.register.mockImplementation(data => Promise.resolve({ email: data.email }));


export default UltimanagerAPI;
