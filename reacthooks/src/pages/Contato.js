import React, { useState } from 'react';
import '../Css/contato.css';

const Contato = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [enviando, setEnviando] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [erro, setErro] = useState('');
    const [nomeValid, setNomeValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [mensagemValid, setMensagemValid] = useState(true);

    const validarEmail = (email) => {
        // Uma validação de email simples, você pode usar uma biblioteca mais robusta
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErro('');
        setNomeValid(!!nome.trim());
        setEmailValid(!!email.trim() && validarEmail(email));
        setMensagemValid(!!mensagem.trim());

        if (!nomeValid || !emailValid || !mensagemValid) {
            setErro('Por favor, preencha todos os campos corretamente.');
            return;
        }

        setEnviando(true);

        try {
            // Simulação de envio para uma API (substitua pela sua lógica real)
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log('Formulário enviado:', { nome, email, mensagem });
            setEnviado(true);
            setNome('');
            setEmail('');
            setMensagem('');
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            setErro('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
        } finally {
            setEnviando(false);
            setTimeout(() => {
                setEnviado(false);
                setErro('');
            }, 3000);
        }
    };

    return (
        <div className="container-contato">
            <h1>Entre em Contato Conosco!</h1>
            <p>Tem alguma dúvida, sugestão ou precisa de ajuda? Preencha o formulário abaixo:</p>

            {erro && <div className="mensagem-erro">{erro}</div>}
            {enviado && <div className="mensagem-sucesso">Mensagem enviada com sucesso! Em breve entraremos em contato.</div>}

            {!enviado && (
                <form onSubmit={handleSubmit}>
                    <div className={`form-group ${!nomeValid ? 'form-group-erro' : ''}`}>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => {
                                setNome(e.target.value);
                                setNomeValid(true);
                            }}
                            aria-invalid={!nomeValid}
                            aria-describedby="nome-error"
                        />
                        {!nomeValid && <div id="nome-error" className="erro-validacao">Por favor, digite seu nome.</div>}
                    </div>

                    <div className={`form-group ${!emailValid ? 'form-group-erro' : ''}`}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailValid(validarEmail(e.target.value));
                            }}
                            aria-invalid={!emailValid}
                            aria-describedby="email-error"
                        />
                        {!emailValid && <div id="email-error" className="erro-validacao">Por favor, digite um email válido.</div>}
                    </div>

                    <div className={`form-group ${!mensagemValid ? 'form-group-erro' : ''}`}>
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea
                            id="mensagem"
                            value={mensagem}
                            onChange={(e) => {
                                setMensagem(e.target.value);
                                setMensagemValid(true);
                            }}
                            rows="5"
                            aria-invalid={!mensagemValid}
                            aria-describedby="mensagem-error"
                        ></textarea>
                        {!mensagemValid && <div id="mensagem-error" className="erro-validacao">Por favor, digite sua mensagem.</div>}
                    </div>

                    <button type="submit" className="botao-enviar" disabled={enviando}>
                        {enviando ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default Contato;