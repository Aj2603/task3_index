import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Tasks</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Task Number</th>
            <th>Repository Link</th>
            <th>Deployment Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React-task-1</td>
            <td>
              <a href="https://github.com/Aj2603/React-task-1">Link 1</a>
            </td>
            <td>
              <a href="https://react-task-1-tan-seven.vercel.app/">Link 1</a>
            </td>
          </tr>
          <tr>
            <td>React-task-2</td>
            <td>
              <a href="https://github.com/Aj2603/React-task-2">Link 2</a>
            </td>
            <td>
              <a href="https://react-task-2-six-pi.vercel.app/">Link 2</a>
            </td>
          </tr>
          <tr>
            <td>React-task-3</td>
            <td>
              <a href="https://github.com/Aj2603/React-task-3">Link 3</a>
            </td>
            <td>
              <a href="https://react-task-3-kappa-one.vercel.app/">Link 3</a>
            </td>
          </tr>
          <tr>
            <td>React-task-4</td>
            <td>
              <a href="https://github.com/Aj2603/React-task-4">Link 4</a>
            </td>
            <td>
              <a href="https://react-task-4-gilt-two.vercel.app/">Link 4</a>
            </td>
          </tr>
          <tr>
            <td>React-task-5</td>
            <td>
              <a href="https://github.com/Aj2603/React-task-5">Link 5</a>
            </td>
            <td>
              <a href="https://react-task-5-khaki.vercel.app/">Link 5</a>
            </td>
          </tr>
          <tr>
            <td>React-task-6</td>
            <td>
              <a href="https://github.com/Aj2603/React-task-6">Link 6</a>
            </td>
            <td>
              <a href="https://react-task-6-amber-sigma.vercel.app/">Link 6</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
