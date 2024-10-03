var quiz = {
  // (A) PROPERTIES
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
  data: [
    {
      q: "What is the time complexity of binary search?",
      o: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      a: 1, // O(log n) is the correct answer.
    },
    {
      q: "Which data structure is used to implement a LIFO (Last In, First Out) system?",
      o: ["Queue", "Stack", "Heap", "Tree"],
      a: 1, // Stack follows the LIFO principle.
    },
    {
      q: "Which sorting algorithm is generally the fastest for large datasets?",
      o: ["Bubble Sort", "Merge Sort", "Quick Sort", "Selection Sort"],
      a: 2, // Quick Sort is typically the fastest for large datasets.
    },
    {
      q: "What is the default port number for HTTP?",
      o: ["21", "80", "443", "8080"],
      a: 1, // Port 80 is the default for HTTP.
    },
    {
      q: "In Java, which keyword is used to create a subclass?",
      o: ["extend", "implements", "extends", "super"],
      a: 2, // 'extends' is the correct keyword to create a subclass.
    },
    {
      q: "Which of the following SQL statements is used to retrieve data from a database?",
      o: ["INSERT", "SELECT", "DELETE", "UPDATE"],
      a: 1, // SELECT is used to retrieve data.
    },
    {
      q: "What is the maximum size of a char in Java?",
      o: ["8 bits", "16 bits", "32 bits", "64 bits"],
      a: 1, // Java char size is 16 bits.
    },
    {
      q: "In Python, how do you declare a function?",
      o: ["function myFunc():", "def myFunc():", "declare myFunc():", "fun myFunc():"],
      a: 1, // 'def' is used to declare a function in Python.
    },
    {
      q: "Which of these is a NoSQL database?",
      o: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
      a: 1, // MongoDB is a NoSQL database.
    },
    {
      q: "What is the purpose of the 'git commit' command in Git?",
      o: ["To push changes to the remote repository", "To save changes locally", "To clone a repository", "To check status"],
      a: 1, // 'git commit' saves changes locally.
    },
    {
      q: "Which HTTP method is used to update a resource?",
      o: ["GET", "POST", "PUT", "DELETE"],
      a: 2, // PUT is used to update resources.
    },
    {
      q: "In JavaScript, which of the following is used to define a block scope variable?",
      o: ["var", "let", "define", "const"],
      a: 1, // 'let' is used for block scope.
    },
    {
      q: "Which of the following algorithms is used for encryption?",
      o: ["SHA-256", "MD5", "AES", "CRC32"],
      a: 2, // AES is an encryption algorithm.
    },
    {
      q: "What does the acronym REST stand for in web services?",
      o: ["Representational State Transfer", "Random Encryption Security Token", "Relative State Transfer", "Remote Entity Service Tool"],
      a: 0, // REST stands for Representational State Transfer.
    },
    {
      q: "Which command is used to view the current branch in Git?",
      o: ["git branch", "git status", "git merge", "git clone"],
      a: 0, // 'git branch' shows the current branch.
    },
    {
      q: "In C++, what is the output of 'cout << 1/2;'?",
      o: ["0", "0.5", "1", "2"],
      a: 0, // Integer division results in 0.
    },
    {
      q: "In Java, which of the following is used to handle exceptions?",
      o: ["try-catch", "error handler", "catch block", "throw error"],
      a: 0, // 'try-catch' is used to handle exceptions in Java.
    },
    {
      q: "Which design pattern is used to ensure a class has only one instance?",
      o: ["Observer", "Factory", "Singleton", "Builder"],
      a: 2, // Singleton design pattern ensures a class has only one instance.
    },
    {
      q: "Which of the following best describes a 'foreign key' in SQL?",
      o: ["A unique identifier", "A key that refers to the primary key of another table", "A key that stores foreign data", "A key that is generated automatically"],
      a: 1, // Foreign key refers to the primary key of another table.
    },
    {
      q: "Which operator is used to access members of a struct in C?",
      o: [".", "->", "::", "*"],
      a: 0, // '.' is used to access members of a struct.
    },
    {
      q: "Which of the following is a valid IPv4 address?",
      o: ["192.168.0.1", "300.255.255.255", "10.0.0.500", "256.256.256.256"],
      a: 0, // 192.168.0.1 is a valid IPv4 address.
    },
    {
      q: "In Object-Oriented Programming, what does 'polymorphism' mean?",
      o: ["The ability to take multiple forms", "A way to encapsulate data", "A way to inherit from multiple classes", "A technique to prevent code duplication"],
      a: 0, // Polymorphism means the ability to take multiple forms.
    },
    {
      q: "Which of the following is an example of a compiled language?",
      o: ["Python", "JavaScript", "Java", "HTML"],
      a: 2, // Java is a compiled language.
    },
    {
      q: "Which of the following is not a relational database?",
      o: ["Oracle", "MySQL", "MongoDB", "PostgreSQL"],
      a: 2, // MongoDB is a NoSQL database.
    },
    {
      q: "In Python, which keyword is used to create a generator?",
      o: ["return", "yield", "generate", "async"],
      a: 1, // 'yield' is used to create a generator.
    },
    {
      q: "Which command is used to initialize a new Git repository?",
      o: ["git commit", "git init", "git clone", "git push"],
      a: 1, // 'git init' initializes a new repository.
    },
    {
      q: "What is the Big-O time complexity of searching in a balanced binary search tree (BST)?",
      o: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      a: 1, // The time complexity of searching in a balanced BST is O(log n).
    },
    {
      q: "Which data structure uses a 'priority queue' internally?",
      o: ["Stack", "Heap", "Tree", "Linked List"],
      a: 1, // A Heap uses a priority queue internally.
    },
    {
      q: "In JavaScript, which of the following is not a primitive data type?",
      o: ["String", "Number", "Object", "Boolean"],
      a: 2, // 'Object' is not a primitive data type.
    },
    {
      q: "Which algorithm is best suited for finding the shortest path in a weighted graph?",
      o: ["Breadth-First Search", "Depth-First Search", "Dijkstra's Algorithm", "Bubble Sort"],
      a: 2, // Dijkstra's Algorithm is used to find the shortest path in a weighted graph.
    },
    {
      q: "In SQL, which clause is used to filter records?",
      o: ["WHERE", "JOIN", "ORDER BY", "GROUP BY"],
      a: 0, // 'WHERE' is used to filter records in SQL.
    },
    {
      q: "Which one of the following sorting algorithms has the worst-case time complexity of O(n log n)?",
      o: ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"],
      a: 1, // Merge Sort has a worst-case time complexity of O(n log n).
    },
    {
      q: "Which one of these is not a feature of the Java programming language?",
      o: ["Platform Independent", "Object-Oriented", "Pointer-based", "Concurrent"],
      a: 2, // Java does not use pointers.
    },
    {
      q: "In C++, which operator is used to dynamically allocate memory for an array?",
      o: ["new[]", "malloc()", "calloc()", "free()"],
      a: 0, // 'new[]' is used to dynamically allocate memory for an array in C++.
    },
    {
      q: "Which HTTP status code represents 'Not Found'?",
      o: ["200", "301", "404", "500"],
      a: 2, // 404 represents 'Not Found'.
    },
    {
      q: "What is the primary purpose of DNS (Domain Name System)?",
      o: ["To host websites", "To assign IP addresses", "To translate domain names to IP addresses", "To manage domain name registrations"],
      a: 2, // DNS translates domain names to IP addresses.
    },
    {
      q: "Which of the following is not a web browser?",
      o: ["Chrome", "Firefox", "Edge", "Docker"],
      a: 3, // Docker is not a web browser.
    },
    {
      q: "Which of the following algorithms is used for compressing data?",
      o: ["AES", "RSA", "Huffman", "SHA-256"],
      a: 2, // Huffman algorithm is used for data compression.
    },
    {
      q: "What is the primary function of the OSI Model in networking?",
      o: ["To create software", "To define network hardware standards", "To standardize network communication", "To manage databases"],
      a: 2, // OSI Model standardizes network communication.
    },
    {
      q: "In Java, which method is used to get the length of an array?",
      o: ["length()", "size()", "count()", "length"],
      a: 3, // 'length' is used to get the array's length in Java.
    },
    {
      q: "Which sorting algorithm has the best average case time complexity?",
      o: ["Bubble Sort", "Quick Sort", "Merge Sort", "Selection Sort"],
      a: 2, // Correct answer is Merge Sort
    },
    {
      q: "Which of the following is a self-balancing binary search tree?",
      o: ["AVL Tree", "Binary Heap", "B-Tree", "Red-Black Tree"],
      a: 0, // Correct answer is AVL Tree
    },
    {
      q: "What is the primary purpose of an index in a database?",
      o: ["To store data", "To improve query performance", "To provide data redundancy", "To ensure data integrity"],
      a: 1, // Correct answer is To improve query performance
    },
    {
      q: "What is the space complexity of depth-first search (DFS) for a graph with V vertices and E edges?",
      o: ["O(V)", "O(E)", "O(V + E)", "O(log V)"],
      a: 2, // Correct answer is O(V + E)
    },
    {
      q: "Which HTTP method is used to update a resource?",
      o: ["GET", "POST", "PUT", "DELETE"],
      a: 2, // Correct answer is PUT
    },
    {
      q: "Which data structure is used in a LIFO (Last In, First Out) order?",
      o: ["Queue", "Array", "Stack", "Linked List"],
      a: 2, // Correct answer is Stack
    },
    {
      q: "In object-oriented programming, what does the concept of 'inheritance' allow?",
      o: ["To create a new class based on an existing class", "To hide information", "To initialize objects", "To override object methods"],
      a: 0, // Correct answer is To create a new class based on an existing class
    },
    {
      q: "Which of the following algorithms is used to detect cycles in a graph?",
      o: ["Prim's Algorithm", "Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Tarjan's Algorithm"],
      a: 3, // Correct answer is Tarjan's Algorithm
    },
    {
      q: "Which protocol is used to securely transmit data over the internet?",
      o: ["HTTP", "FTP", "SMTP", "HTTPS"],
      a: 3, // Correct answer is HTTPS
    },
    {
      q: "Which design pattern ensures only one instance of a class is created?",
      o: ["Factory Pattern", "Observer Pattern", "Singleton Pattern", "Adapter Pattern"],
      a: 2, // Correct answer is Singleton Pattern
    },
    {
      q: "Which of the following is responsible for managing memory in an operating system?",
      o: ["File Manager", "Kernel", "Shell", "Memory Management Unit (MMU)"],
      a: 3 // Correct answer is Memory Management Unit (MMU)
    },
    {
      q: "What is a deadlock in operating systems?",
      o: ["Processes running simultaneously", "A process waiting for an event that will never occur", "Memory allocation error", "A resource allocation strategy"],
      a: 1 // Correct answer is a process waiting for an event that will never occur
    },
    {
      q: "Which of the following is a valid process scheduling algorithm?",
      o: ["Round Robin", "Binary Search", "Merge Sort", "Semaphore"],
      a: 0 // Correct answer is Round Robin
    },
    {
      q: "What is the purpose of a 'semaphore' in OS?",
      o: ["To signal process completion", "To handle resource synchronization", "To allocate memory", "To prioritize I/O tasks"],
      a: 1 // Correct answer is To handle resource synchronization
    },
    {
      q: "What does 'context switch' mean in OS?",
      o: ["Switching between threads", "Switching the state of processes", "Switching between hardware components", "Switching between users"],
      a: 1 // Correct answer is Switching the state of processes
    },
    {
      q: "Which of the following is a non-preemptive scheduling algorithm?",
      o: ["Round Robin", "Shortest Job First", "First-Come, First-Served", "Priority Scheduling"],
      a: 2 // Correct answer is First-Come, First-Served
    },
    {
      q: "What is the function of virtual memory in an operating system?",
      o: ["Provides more RAM", "Allows multiple users", "Extends physical memory", "Facilitates multitasking"],
      a: 2 // Correct answer is Extends physical memory
    },
    {
      q: "Which of the following is a disk scheduling algorithm?",
      o: ["FCFS", "SCAN", "Paging", "Deadlock Prevention"],
      a: 1 // Correct answer is SCAN
    },
    {
      q: "What is the main purpose of an interrupt in an OS?",
      o: ["To improve CPU speed", "To handle I/O operations", "To store memory", "To control resource allocation"],
      a: 1 // Correct answer is To handle I/O operations
    },
    {
      q: "What is the difference between a process and a thread?",
      o: ["Process is lightweight, thread is heavyweight", "Thread is part of a process", "Process uses less memory", "Threads execute sequentially"],
      a: 1 // Correct answer is Thread is part of a process
    },
    {
      q: "Which of the following OS is open-source?",
      o: ["Windows", "macOS", "Linux", "iOS"],
      a: 2 // Correct answer is Linux
    },
    {
      q: "Which of the following states does a process enter after waiting for a resource?",
      o: ["Running", "Ready", "Blocked", "Suspended"],
      a: 2 // Correct answer is Blocked
    },
    {
      q: "In paging, which of the following keeps track of all free frames?",
      o: ["Frame table", "Page table", "Swap space", "Process Control Block (PCB)"],
      a: 0 // Correct answer is Frame table
    },
    {
      q: "Which of the following is a technique to handle deadlocks?",
      o: ["Banker's algorithm", "Paging", "Segmentation", "FIFO"],
      a: 0 // Correct answer is Banker's algorithm
    },
    {
      q: "What is the primary function of the 'kernel' in an OS?",
      o: ["User interface management", "Process management", "Hardware and software interface", "None of the above"],
      a: 2 // Correct answer is Hardware and software interface
    },
    {
      q: "What is the function of a router in a network?",
      o: ["Stores data", "Provides IP addresses", "Routes data between networks", "Encrypts network traffic"],
      a: 2 // Correct answer is Routes data between networks
    },
    {
      q: "Which layer of the OSI model is responsible for end-to-end communication?",
      o: ["Network Layer", "Data Link Layer", "Transport Layer", "Application Layer"],
      a: 2 // Correct answer is Transport Layer
    },
    {
      q: "What is the full form of DNS?",
      o: ["Data Name System", "Domain Name System", "Domain Name Server", "Data Network Service"],
      a: 1 // Correct answer is Domain Name System
    },
    {
      q: "Which protocol is used to send an email?",
      o: ["FTP", "SMTP", "HTTP", "POP"],
      a: 1 // Correct answer is SMTP
    },
    {
      q: "Which of the following is a type of network topology?",
      o: ["Star", "Ring", "Bus", "All of the above"],
      a: 3 // Correct answer is All of the above
    },
    {
      q: "What is the size of an IPv6 address?",
      o: ["32 bits", "64 bits", "128 bits", "256 bits"],
      a: 2 // Correct answer is 128 bits
    },
    {
      q: "What is the primary function of a firewall in a network?",
      o: ["To monitor network traffic", "To prevent unauthorized access", "To encrypt data", "To compress data"],
      a: 1 // Correct answer is To prevent unauthorized access
    },
    {
      q: "Which protocol is used for file transfer between client and server?",
      o: ["FTP", "SMTP", "DHCP", "DNS"],
      a: 0 // Correct answer is FTP
    },
    {
      q: "What is the maximum data rate of a Wi-Fi network using the 802.11ac standard?",
      o: ["433 Mbps", "600 Mbps", "1.3 Gbps", "10 Gbps"],
      a: 2 // Correct answer is 1.3 Gbps
    },
    {
      q: "What is the main purpose of a proxy server?",
      o: ["To store websites", "To act as an intermediary between client and server", "To secure data", "To assign IP addresses"],
      a: 1 // Correct answer is To act as an intermediary between client and server
    },
    {
      q: "Which protocol is used for secure communication over a computer network?",
      o: ["HTTP", "HTTPS", "FTP", "SMTP"],
      a: 1 // Correct answer is HTTPS
    },
    {
      q: "What is the default subnet mask for a Class C IP address?",
      o: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.128.0"],
      a: 0 // Correct answer is 255.255.255.0
    },
    {
      q: "Which layer of the OSI model deals with logical addressing?",
      o: ["Physical Layer", "Data Link Layer", "Network Layer", "Session Layer"],
      a: 2 // Correct answer is Network Layer
    },
    {
      q: "Which protocol is used for dynamically assigning IP addresses to devices?",
      o: ["DNS", "DHCP", "ICMP", "SNMP"],
      a: 1 // Correct answer is DHCP
    },
    {
      q: "What is the maximum transmission distance for a Cat5e cable?",
      o: ["10 meters", "100 meters", "300 meters", "500 meters"],
      a: 1 // Correct answer is 100 meters
    },
    {
      q: "What is a primary key in a database?",
      o: ["A unique identifier for each record", "A non-unique field", "A foreign key", "A table name"],
      a: 0 // Correct answer is A unique identifier for each record
    },
    {
      q: "Which of the following is a NoSQL database?",
      o: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      a: 2 // Correct answer is MongoDB
    },
    {
      q: "What does ACID stand for in databases?",
      o: ["Automatic, Consistent, Invariable, Durable", "Atomicity, Consistency, Isolation, Durability", "Anonymous, Control, Insertion, Deletion", "None of the above"],
      a: 1 // Correct answer is Atomicity, Consistency, Isolation, Durability
    },
    {
      q: "What is the purpose of an index in a database?",
      o: ["To store data", "To improve search performance", "To enforce referential integrity", "To normalize the database"],
      a: 1 // Correct answer is To improve search performance
    },
    {
      q: "Which SQL command is used to retrieve data from a database?",
      o: ["INSERT", "SELECT", "DELETE", "UPDATE"],
      a: 1 // Correct answer is SELECT
    },
    {
      q: "Which normal form ensures that there are no transitive dependencies in the database?",
      o: ["1NF", "2NF", "3NF", "BCNF"],
      a: 2 // Correct answer is 3NF
    },
    {
      q: "Which of the following is a type of join in SQL?",
      o: ["Outer Join", "Left Join", "Right Join", "All of the above"],
      a: 3 // Correct answer is All of the above
    },
    {
      q: "Which command is used to remove a table from a database?",
      o: ["DELETE", "REMOVE", "DROP", "ALTER"],
      a: 2 // Correct answer is DROP
    },
    {
      q: "What is a foreign key in a database?",
      o: ["A key that points to a primary key in another table", "A non-unique key", "A redundant field", "A primary key in the same table"],
      a: 0 // Correct answer is A key that points to a primary key in another table
    },
    {
      q: "Which of the following SQL clause is used to sort records?",
      o: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"],
      a: 1 // Correct answer is ORDER BY
    },
    {
      q: "Which of the following is a hook used to handle side effects in React?",
      o: ["useState", "useEffect", "useMemo", "useContext"],
      a: 1 // Correct answer is useEffect
    },
    {
      q: "What is JSX in React?",
      o: ["A JavaScript framework", "A syntax extension for JavaScript", "A CSS library", "A routing system"],
      a: 1 // Correct answer is A syntax extension for JavaScript
    },
    {
      q: "Which of the following is used to manage the state in a functional React component?",
      o: ["this.setState", "useState", "Redux", "Context API"],
      a: 1 // Correct answer is useState
    },
    {
      q: "What is the purpose of the `key` prop in React?",
      o: ["To uniquely identify elements in an array", "To bind data", "To handle events", "To manage state"],
      a: 0 // Correct answer is To uniquely identify elements in an array
    },
    {
      q: "What does 'lifting state up' mean in React?",
      o: ["Moving state from a parent component to a child component", "Sharing state between components", "Moving state from a child component to a parent component", "None of the above"],
      a: 2 // Correct answer is Moving state from a child component to a parent component
    },
    {
      q: "What is React Fiber?",
      o: ["A new version of the React DOM", "The reconciliation engine in React", "A state management library", "A CSS-in-JS solution"],
      a: 1 // Correct answer is The reconciliation engine in React
    },
    {
      q: "Which method is used to create a component in React?",
      o: ["createComponent", "useComponent", "render", "React.createElement"],
      a: 3 // Correct answer is React.createElement
    },
    {
      q: "What does the `useContext` hook in React do?",
      o: ["Allows components to read and subscribe to context changes", "Creates a new state", "Manages component lifecycle", "Re-renders components"],
      a: 0 // Correct answer is Allows components to read and subscribe to context changes
    },
    {
      q: "What is a 'Pure Component' in React?",
      o: ["A component that re-renders frequently", "A component that only re-renders when its props change", "A class-based component", "A component with no lifecycle methods"],
      a: 1 // Correct answer is A component that only re-renders when its props change
    },
    {
      q: "What is React.Fragment used for?",
      o: ["To wrap a list of children without adding extra nodes to the DOM", "To manage component state", "To optimize rendering", "To apply CSS"],
      a: 0 // Correct answer is To wrap a list of children without adding extra nodes to the DOM
    }
  ],

  // (A2) HTML ELEMENTS
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper

  // (A3) GAME FLAGS
  now: 0, // current question index
  score: 0, // current score
  maxQuestions: 10, // number of questions per session
  shuffledData: [], // shuffled question data

  // (A4) FUNCTION TO SHUFFLE QUESTIONS
  shuffleQuestions: () => {
    let shuffled = [...quiz.data]; // Make a copy of the original questions
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
  },

  // (B) INIT QUIZ HTML
  init: () => {
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    // (B2) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B4) SHUFFLE QUESTIONS AND LIMIT TO 10
    quiz.shuffledData = quiz.shuffleQuestions().slice(0, quiz.maxQuestions);

    // (B5) GO!
    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: () => {
    if (quiz.now >= quiz.maxQuestions || quiz.now >= quiz.shuffledData.length) {
      quiz.endQuiz();
      return;
    }

    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.shuffledData[quiz.now].q;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.shuffledData[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.shuffledData[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => {
        quiz.select(label);
      });
      quiz.hAns.appendChild(label);
    }
  },

  // (D) OPTION SELECTED
  select: (option) => {
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let correct = option.dataset.idx == quiz.shuffledData[quiz.now].a;
    if (correct) {
      quiz.score++;
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
    }

    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.maxQuestions && quiz.now < quiz.shuffledData.length) {
        quiz.draw();
      } else {
        quiz.endQuiz();
      }
    }, 1000);
  },

  // (E) END QUIZ
  endQuiz: () => {
    quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.maxQuestions} questions correctly.`;
    quiz.hAns.innerHTML = "";
  },

  // (F) RESTART QUIZ
  reset: () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.shuffledData = quiz.shuffleQuestions().slice(0, quiz.maxQuestions); // Reshuffle questions
    quiz.draw();
  },

};
window.addEventListener("load", quiz.init);
