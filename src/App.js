import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header'

/**
 * Componente
 * Propriedades
 * Estado & Imutabilidade
 */

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })

  }, []);

  //useState retorna array com duas posi��es
  // 1 - Vari�vel com o seu valor inicial
  // 2 - Fun��o para atualizarmos esse valor

  //useEffect
  // Disparar fun��es sempre que tiver informa��o alterada ou n�o
  // Dois parametros
  //   1 - Fun��o que sera executada
  //   2 - Quando que a fun��o sera executada (array de dependencias)

  async function handleAddProject() {
    //setProjects([...projects, `Novo Projeto ${Date.now()}`]);

    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Rodrigo Garcia"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App;
