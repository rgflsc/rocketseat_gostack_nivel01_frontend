import React, { useState } from 'react';

import Header from './components/Header'

/**
 * Componente
 * Propriedades
 * Estado & Imutabilidade
 */

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  //useState retorna array com duas posi��es
  // 1 - Vari�vel com o seu valor inicial
  // 2 - Fun��o para atualizarmos esse valor

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App;
