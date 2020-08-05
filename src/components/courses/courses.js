import React from "react";
import Jumbotron from "../jumbotron/jumbotron";
import "../jumbotron/jumbotron.css";
import "./courses.css"

const Courses = () => {
  return (
    <div className="course-wrapper">
      <section class="html pt-3 pb-3 mt-5 container position-relative mb-4">
        <div class="col-md-12 col-sm-12">
          <div class="col-12">
            <h3 class="text-danger pb-3 html">HTML5 & CSS3</h3>
          </div>
        </div>

        <article class="container mb-1">
          <div class="row">
            <div class="col-md-5 col-sm-12 ">
              <div class="col-md-12 col-sm-12">
                <p class="parag">
                  HTML is the foundation of all web pages. It defines the
                  structure of a page, while CSS defines its style. HTML and CSS
                  are the beginning of everything you need to know to make your
                  first web page! Learn both and start creating amazing
                  websites.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 d-md-flex">
              <div class="col-sm-12 col-md-12">
                <h4 class="skills">Skills Covered</h4>
                <p class="parag">
                  HTML Form Handling(Validation using HTML5 and CSS3)
                </p>
                <p class="parag">Minification</p>
                <p class="parag">Coaching</p>
                <p class="parag">Canvas</p>
                <p class="parag">Geolocation</p>
              </div>
              <div class="col-sm-12 col-md-12 mb-3">
                <h4 class="skills">This course is for: </h4>
                <span class="d-md-block parag mb-1">Developers</span> &nbsp
                &nbsp
                <span class="d-md-block parag mb-1">Designers</span>&nbsp&nbsp
                <span class="d-md-block parag mb-1">Digital Creatives</span>
              </div>
            </div>
          </div>
        </article>

        <div class="col-md-12 col-sm-12">
          <div class="col-12">
            <button class="btn btn-danger">Enroll Today</button>
          </div>
        </div>
      </section>

      <section class="python  pt-3 pb-3 mt-5 container position-relative mb-4">
        <div class="col-md-12 col-sm-12">
          <div class="col-12">
            <h3 class="text-danger pb-3 python">Python</h3>
          </div>
        </div>

        <article class="container mb-1">
          <div class="row">
            <div class="col-md-5 col-sm-12 ">
              <div class="col-md-12 col-sm-12">
                <p class="parag">
                  Python is an interpreted, high-level, general-purpose
                  programming language. Created by Guido van Rossum and first
                  released in 1991, Python's design philosophy emphasizes code
                  readability with its notable use of significant whitespace.{" "}
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 d-md-flex">
              <div class="col-sm-12 col-md-12">
                <h4 class="skills">Skills Covered</h4>
                <p class="parag">Modules and Packages</p>
                <p class="parag">Errors and Exception Handling</p>
                <p class="parag">Decorators and generators</p>
              </div>
              <div class="col-sm-12 col-md-12 mb-3">
                <h4 class="skills">This course is for: </h4>
                <span class="d-md-block parag mb-1">Developers</span>&nbsp&nbsp
                <span class="d-md-block parag mb-1">Designers</span>&nbsp&nbsp
                <span class="d-md-block parag mb-1">Digital Creatives</span>
              </div>
            </div>
          </div>
        </article>

        <div class="col-md-12 col-sm-12">
          <div class="col-12">
            <button class="btn btn-danger">Enroll Today</button>
          </div>
        </div>
      </section>

      <section class="javascript  pt-3 pb-3 mt-5 container position-relative mb-4">
        <div class="col-md-12 col-sm-12">
          <div class="col-12">
            <h3 class="text-danger pb-3 javaScripts">Javascript</h3>
          </div>
        </div>

        <article class="container mb-1">
          <div class="row">
            <div class="col-md-5 col-sm-12 ">
              <div class="col-md-12 col-sm-12">
                <p class="parag">
                  {" "}
                  JavaScript is high-level, often just-in-time compiled, and
                  multi-paradigm. It has curly-bracket syntax, dynamic typing,
                  prototype-based object-orientation, and first-class functions.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 d-md-flex">
              <div class="col-sm-12 col-md-12">
                <h4 class="skills">Skills Covered</h4>
                <p class="parag">Basic for loop and a for-in loop </p>
                <p class="parag">Offload work to a helper function</p>
                <p class="parag">
                  Understand and create tests using assertion functions
                </p>
                <p class="parag">Canvas</p>
                <p class="parag">Regular Expression Basics</p>
              </div>
              <div class="col-sm-12 col-md-12 mb-3">
                <h4 class="skills">This course is for: </h4>
                <span class="d-md-block parag mb-1">Developers</span>&nbsp&nbsp
                <span class="d-md-block parag mb-1">Designers</span>&nbsp&nbsp
                <span class="d-md-block parag mb-1">Digital Creatives</span>
              </div>
            </div>
          </div>
        </article>

        <div class="col-md-12 col-sm-12">
          <div class="col-12">
            <button class="btn btn-danger">Enroll Today</button>
          </div>
        </div>
      </section>

      <section class="ruby  pt-3 pb-3 mt-5 container position-relative mb-4">
        <div class="col-md-12 col-sm-12">
          <div class="col-12">
            <h3 class="text-danger pb-3 rubs">Ruby</h3>
          </div>
        </div>

        <article class="container mb-1">
          <div class="row">
            <div class="col-md-5 col-sm-12 ">
              <div class="col-md-12 col-sm-12">
                <p class="parag">
                  {" "}
                  Ruby is an interpreted, high-level, general-purpose
                  programming language. It was designed and developed in the
                  mid-1990s by Yukihiro "Matz" Matsumoto in Japan. Ruby is
                  dynamically typed and uses garbage collection
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 d-md-flex">
              <div class="col-sm-12 col-md-12">
                <h4 class="skills">Skills Covered</h4>
                <p class="parag">Introduction and Installation </p>
                <p class="parag">Blocks, Procs, and Lambdas</p>
                <p class="parag">The time Object</p>
              </div>
              <div class="col-sm-12 col-md-12 mb-3">
                <h4 class="skills">This course is for: </h4>
                <span class="d-md-block parag mb-1">Developers</span>&nbsp&nbsp
                <span class="d-md-block parag mb-1">Designers</span>&nbsp&nbsp
                <span class="d-md-block parag mb-1">Digital Creatives</span>
              </div>
            </div>
          </div>
        </article>

        <div class="col-md-12 col-sm-12">
          <div class="col-12">
            <button class="btn btn-danger">Enroll Today</button>
          </div>
        </div>
      </section>

      <section class="  pt-3 pb-3 go mt-5 container position-relative mb-4">
        <div class="col-md-12 col-sm-12">
          <div class="col-12">
            <h3 class="text-danger pb-3 gos">Go</h3>
          </div>
        </div>

        <article class="container mb-1">
          <div class="row">
            <div class="col-md-5 col-sm-12 ">
              <div class="col-md-12 col-sm-12">
                <p class="parag">
                  {" "}
                  Go is an open source programming language that makes it easy
                  to build simple, reliable, and efficient software. Download
                  Go. Binary distributions available for. Linux, macOS, Windows,
                  and more.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 d-md-flex">
              <div class="col-sm-12 col-md-12">
                <h4 class="skills">Skills Covered</h4>
                <p class="parag">Concurrency </p>
                <p class="parag">Bit Shifting</p>
                <p class="parag">Error Handling</p>
              </div>
              <div class="col-sm-12 col-md-12 mb-3">
                <h4 class="skills">This course is for: </h4>

                <span class="d-md-block parag mb-1">Developers</span>
              </div>
            </div>
          </div>
        </article>

        <div class="col-md-12 col-sm-12">
          <div class="col-12">
            <button class="btn btn-danger">Enroll Today</button>
          </div>
        </div>
      </section>

      <section class=" csharp  pt-3 pb-3 mt-5 container position-relative mb-4">
        <div class="col-md-12 col-sm-12">
          <div class="col-12">
            <h3 class="text-danger pb-3 cs">C#</h3>
          </div>
        </div>

        <article class="container mb-1">
          <div class="row">
            <div class="col-md-5 col-sm-12 ">
              <div class="col-md-12 col-sm-12">
                <p class="parag">
                  {" "}
                  C# is a general-purpose, multi-paradigm programming language
                  encompassing strong typing, lexically scoped, imperative,
                  eclarative, functional, generic, object-oriented, and
                  component-oriented programming disciplines
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 d-md-flex">
              <div class="col-sm-12 col-md-12">
                <h4 class="skills">Skills Covered</h4>
                <p class="parag">Concurrency </p>
                <p class="parag">Bit Shifting</p>
                <p class="parag">Error Handling</p>
              </div>
              <div class="col-sm-12 col-md-12 mb-3">
                <h4 class="skills">This course is for: </h4>

                <span class="d-md-block parag mb-1">Developers</span>
              </div>
            </div>
          </div>
        </article>

        <div class="col-md-12 col-sm-12">
          <div class="col-12">
            <button class="btn btn-danger">Enroll Today</button>
          </div>
        </div>
      </section>
      <Jumbotron />
    </div>
  );
};

export default Courses;
