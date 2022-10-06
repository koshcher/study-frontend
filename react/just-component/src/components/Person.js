import React from "react"

class Experience extends React.Component {
  render() {
    return (
      <>
        <h2>Work experience</h2>
        <ol>
          <li><a href="https://github.com/roman-koshchei/genkey-api">Genkey API</a> - web api for getting keyboard layout analysis written in golang</li>
          <li><a href="https://github.com/flurium/babble">BabbleUp</a> - chat app (udp + tcp) written in c#</li>
          <li><a href="https://github.com/fasko-app/fasko">Fasko</a> - flutter tack manager and pomodoro timer at the same time</li>
          <li><a href="https://github.com/fasko-app/fasko-app.github.io">Fasko web site</a> and <a href="https://github.com/roman-koshchei/learn-by-cards">Vanila js learn cards site</a></li>
        </ol>
      </>
    )
  }
}

const Info = ({ name, surname }) => {
  return (
    <>
      <h2>{name} {surname}</h2>
      <table>
        <tr>
          <th>Phone: </th>
          <td>+380667274905</td>
        </tr>
        <tr>
          <th>Email: </th>
          <td>romankoshchei@gmail.com</td>
        </tr>
        <tr>
          <th>Town (now): </th>
          <td>Uman</td>
        </tr>
      </table>
    </>
  )
}

const Skills = ({ skills }) => {
  return (
    <>
      <h2>Skills</h2>
      <ol>
        {skills.map((val) => <li>{val}</li>)}
      </ol>
    </>
  )
}

class Person extends React.Component {
  skills = [
    ".NET CORE (C#) + WPF",
    "Network programming",
    "Base flutter + base c++",
    "Vanila js + base angular"
  ]

  render() {
    return (
      <>
        <h1>Personal page</h1>
        <img src="https://avatars.githubusercontent.com/u/103932583?v=4" alt="My photo" />
        <Info name="Roman" surname="Koshchei" />
        <Experience />
        <Skills skills={this.skills} />
      </>
    )
  }
}

export default Person