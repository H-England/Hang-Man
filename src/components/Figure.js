import React from 'react'

const Hangman = ({ wrongLetters }) => {
  const errors = wrongLetters.length

  return (
    <svg height="500" width="400" className="figurecontainer">
      {/* <!-- Base --> */}
      {errors > 0 &&
        <line x1="40" y1="460" x2="200" y2="460" />
      }
      {/* <!-- Column --!> */}
      {errors > 1 && 
        <line x1="120" y1="40" x2="120" y2="460" />
      }
      {/* <!-- Top of Column --!> */}
      {errors > 2 && 
        <line x1="120" y1="40" x2="280" y2="40" />
      }
      {/* <!-- Rope --!> */}
      {errors > 3 && 
        <line x1="280" y1="40" x2="280" y2="110" />
      }

      {/* <!-- Head --> */}
      {errors > 4 &&
        <circle cx="280" cy="150" r="40" />
      }
      {/* <!-- Body --> */}
      {errors > 5 &&
        <line x1="280" y1="190" x2="280" y2="300" />
      }
      {/* <!-- Arms --> */}
      {errors > 6 &&
        <line x1="280" y1="240" x2="220" y2="200" />
      }
      {errors > 7 &&
        <line x1="280" y1="240" x2="340" y2="200" />
      }
      {/* <!-- Legs --> */}
      {errors > 8 &&
        <line x1="280" y1="300" x2="220" y2="380" />
      }
      {errors > 9 &&
        <line x1="280" y1="300" x2="340" y2="380" />
      }
    </svg>
  )
}


export default Hangman