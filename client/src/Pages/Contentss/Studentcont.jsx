import React from 'react'
import './Studentcont.css'
import Navprofile from '../../Components/navbar/Navprofile'

export default function Studentcont() {
  return (
    <>
    
      <header>
      <Navprofile/>
        <center>
        <h1 className='stu'>Student Education Contents</h1>
        <p>Exploring a World of Knowledge</p>
        </center>
      </header>
      <div className="container">
        <div className="section">
          <div className="section-content">
            <h2>Core Subjects</h2>
            <p>Mathematics, Science, Language Arts, Social Studies</p>
            <ul className="book-list">
              <li>Mathematics: "Mathematics for the Curious" by Peter M. Higgins</li>
              <li>Science: "A Short History of Nearly Everything" by Bill Bryson</li>
              <li>Language Arts: "The Elements of Style" by William Strunk Jr. and E.B. White</li>
              <li>Social Studies: "A People's History of the United States" by Howard Zinn</li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <h2>Languages</h2>
            <p>Learning the native language(s) and additional languages</p>
            <ul className="book-list">
              <li>English: "To Kill a Mockingbird" by Harper Lee</li>
              <li>Spanish: "One Hundred Years of Solitude" by Gabriel García Márquez</li>
              <li>French: "Les Misérables" by Victor Hugo</li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <h2>Arts and Humanities</h2>
            <p>Visual Arts, Performing Arts, Literature and Creative Writing</p>
            <ul className="book-list">
              <li>Visual Arts: "The Art Book" by Phaidon Press</li>
              <li>Performing Arts: "The Theater and Its Double" by Antonin Artaud</li>
              <li>Literature: "Pride and Prejudice" by Jane Austen</li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <h2>Physical Education</h2>
            <p>Fitness, Sports, Health Education</p>
            <ul className="book-list">
              <li>Fitness: "The New Rules of Lifting" by Lou Schuler and Alwyn Cosgrove</li>
              <li>Sports: "Moneyball: The Art of Winning an Unfair Game" by Michael Lewis</li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <h2>Technology</h2>
            <p>Computer Science, Coding, Digital Literacy</p>
            <ul className="book-list">
              <li>Computer Science: "The Pragmatic Programmer" by Andrew Hunt and David Thomas</li>
              <li>Coding: "Clean Code: A Handbook of Agile Software Craftsmanship" by Robert C. Martin</li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <h2>Career Development</h2>
            <p>Exploring Career Paths, Job Skills</p>
            <ul className="book-list">
              <li>Career Exploration: "What Color Is Your Parachute?" by Richard N. Bolles</li>
              <li>Job Skills: "Atomic Habits: An Easy &amp; Proven Way to Build Good Habits &amp; Break Bad Ones" by James Clear</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
