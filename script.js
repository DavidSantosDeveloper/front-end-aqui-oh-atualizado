


// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWQiOiJjbTV1YzNpb2cwMDAya2t2ODR2ZnMybTF6IiwiZW1haWwiOiJmdWxhbm9AZ21haWwuY29tIiwibmFtZSI6IkZ1bGFubyIsImNvbXBldGVjaWFJZCI6ImNtNXVjM2luZzAwMDBra3Y4bWk3NTl2c3EiLCJjcmVhdGVkQXQiOiIyMDI1LTAxLTEzVDAwOjU3OjA2LjY0MFoiLCJ1cGRhdGVkQXQiOiIyMDI1LTAxLTE5VDE1OjEwOjU5Ljg5NVoiLCJpYXQiOjE3Mzg2MTgzNzQsImV4cCI6MTczODcwNDc3NH0.ElYDltxqQQwWU2oP4PcyEQC8LTv5yZSkYqPTVAVO-6Q';
// const reclamacaoId = 'dasdasdasdas';

// const ws = new WebSocket(`ws://localhost:3001/api/mensagem/${reclamacaoId}`, [], {
//     headers: {
//         'Authorization': `Bearer ${token}`
//     }
// });

// ws.onopen = () => {
//     console.log('Conexão WebSocket aberta');
// };

// ws.onmessage = (event) => {
//     const message = JSON.parse(event.data);
//     console.log('Mensagem recebida:', message);
// };

// ws.onerror = (error) => {
//     console.error('Erro no WebSocket:', error);
// };

// ws.onclose = () => {
//     console.log('Conexão WebSocket fechada');
// };



const id = "dasdasdasdas"; // Substitua pelo ID da reclamação
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWQiOiJjbTV1YzNpb2cwMDAya2t2ODR2ZnMybTF6IiwiZW1haWwiOiJmdWxhbm9AZ21haWwuY29tIiwibmFtZSI6IkZ1bGFubyIsImNvbXBldGVjaWFJZCI6ImNtNXVjM2luZzAwMDBra3Y4bWk3NTl2c3EiLCJjcmVhdGVkQXQiOiIyMDI1LTAxLTEzVDAwOjU3OjA2LjY0MFoiLCJ1cGRhdGVkQXQiOiIyMDI1LTAxLTE5VDE1OjEwOjU5Ljg5NVoiLCJpYXQiOjE3Mzg2MTgzNzQsImV4cCI6MTczODcwNDc3NH0.ElYDltxqQQwWU2oP4PcyEQC8LTv5yZSkYqPTVAVO-6Q"; // Substitua pelo seu token JWT
const ws = new WebSocket(`ws://localhost:3001/api/mensagem/${id}?auth=${token}`);

ws.onopen = () => {
    console.log("Conexão WebSocket aberta");
};

ws.onmessage = (event) => {
    console.log("Mensagem recebida:", event.data);
};

ws.onclose = () => {
    console.log("Conexão WebSocket fechada");
};

ws.onerror = (error) => {
    console.error("Erro no WebSocket:", error);
};