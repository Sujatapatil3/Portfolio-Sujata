export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
}

export interface SchemaTable {
  name: string;
  columns: { name: string; type: string; note?: string }[];
}

export interface Project {
  slug: string;
  name: string;
  period: string;
  status: 'shipped' | 'in-progress';
  oneLiner: string;
  description: string[];
  techStack: string[];
  architecture: {
    layers: string[]; // ordered top-to-bottom for the diagram
    summary: string;
  };
  endpoints: ApiEndpoint[];
  schema: SchemaTable[];
  features: string[];
  challenges: { problem: string; solution: string }[];
  learnings: string[];
  githubUrl: string;
  liveUrl: string | null;
}

export const projects: Project[] = [
  {
    slug: 'online-voting-application',
    name: 'Online Voting Application',
    period: 'Apr 2026 – Jul 2026',
    status: 'in-progress',
    oneLiner: 'A full-stack online voting platform with secure voter registration and vote casting.',
    description: [
      'A full-stack online voting application covering the complete election lifecycle: secure voter registration, candidate management, and vote casting.',
      'The backend uses Spring Boot and JPA over MySQL to keep voter, candidate, election, and result data consistent, with REST APIs handling all frontend-backend communication.',
    ],
    techStack: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'JPA', 'HTML', 'CSS', 'JavaScript'],
    architecture: {
      layers: [
        'Client (HTML/CSS/JavaScript)',
        'Spring Boot REST Controllers',
        'Service Layer (validation, election rules)',
        'Spring Data JPA',
        'MySQL Database',
      ],
      summary:
        'A layered Spring Boot architecture: REST controllers expose voting and election endpoints, a service layer enforces validation and business rules, and JPA persists voter, candidate, election, and result data in MySQL.',
    },
    endpoints: [
      { method: 'POST', path: '/api/voters/register', description: 'Register a new voter' },
      { method: 'GET', path: '/api/candidates', description: 'List all candidates for an election' },
      { method: 'POST', path: '/api/candidates', description: 'Add a new candidate (admin only)' },
      { method: 'POST', path: '/api/votes', description: 'Cast a vote for a candidate' },
      { method: 'GET', path: '/api/elections/{id}/results', description: 'Retrieve live results for an election' },
    ],
    schema: [
      {
        name: 'voters',
        columns: [
          { name: 'id', type: 'BIGINT', note: 'PK' },
          { name: 'name', type: 'VARCHAR(100)' },
          { name: 'voter_id', type: 'VARCHAR(50)', note: 'UNIQUE' },
          { name: 'has_voted', type: 'BOOLEAN' },
        ],
      },
      {
        name: 'candidates',
        columns: [
          { name: 'id', type: 'BIGINT', note: 'PK' },
          { name: 'name', type: 'VARCHAR(100)' },
          { name: 'party', type: 'VARCHAR(100)' },
          { name: 'election_id', type: 'BIGINT', note: 'FK → elections.id' },
        ],
      },
      {
        name: 'votes',
        columns: [
          { name: 'id', type: 'BIGINT', note: 'PK' },
          { name: 'voter_id', type: 'BIGINT', note: 'FK → voters.id' },
          { name: 'candidate_id', type: 'BIGINT', note: 'FK → candidates.id' },
          { name: 'cast_at', type: 'DATETIME' },
        ],
      },
    ],
    features: [
      'Secure voter registration with duplicate-vote prevention',
      'Candidate management with per-election grouping',
      'End-to-end vote casting flow backed by REST APIs',
      'Input validation and optimized SQL queries for reliability at scale',
    ],
    challenges: [
      {
        problem: 'Preventing a voter from casting more than one vote in the same election.',
        solution:
          'Enforced a has_voted flag checked and updated atomically during vote casting, backed by a unique constraint pairing voter and election at the database level.',
      },
      {
        problem: 'Keeping election results accurate and queryable without recomputing totals on every request.',
        solution:
          'Used optimized SQL aggregation queries scoped per election, with exception handling around edge cases like elections with zero votes cast.',
      },
    ],
    learnings: [
      'Designing REST APIs around real-world constraints like one-vote-per-voter integrity',
      'Structuring a Spring Boot + JPA backend around secure, auditable data flows',
      'Writing input validation and exception handling that holds up under concurrent requests',
    ],
    githubUrl: '///////////////////', // Replace with your GitHub URL for this project
    liveUrl: null,
  },
  {
    slug: 'direct-market-access',
    name: 'Direct Market Access for Farmers',
    period: 'Jan 2025 – Apr 2025',
    status: 'shipped',
    oneLiner: 'A marketplace platform removing middlemen between farmers and buyers.',
    description: [
      'A web platform that lets farmers list produce and sell directly to buyers, cutting out intermediary markups and giving farmers control over pricing.',
      'Covers the full commerce loop: registration, product listing, browsing, and order placement, backed by a relational schema designed to keep transactions consistent.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    architecture: {
      layers: [
        'Browser (HTML/CSS/JS)',
        'PHP Request Handlers',
        'Business Logic (validation, pricing, order rules)',
        'MySQL Database',
      ],
      summary:
        'A classic three-tier structure: the browser talks to PHP scripts over HTTP, PHP enforces validation and order rules before touching data, and MySQL persists users, listings, and transactions behind a normalized schema.',
    },
    endpoints: [
      { method: 'POST', path: '/auth/register', description: 'Register a new farmer or buyer account' },
      { method: 'POST', path: '/auth/login', description: 'Authenticate and start a session' },
      { method: 'GET', path: '/products', description: 'List all active produce listings, filterable by category' },
      { method: 'POST', path: '/products', description: 'Create a new produce listing (farmer only)' },
      { method: 'PUT', path: '/products/{id}', description: 'Update price or quantity on an existing listing' },
      { method: 'POST', path: '/orders', description: 'Place an order against one or more listings' },
      { method: 'GET', path: '/orders/{userId}', description: "Retrieve a user's order history" },
    ],
    schema: [
      {
        name: 'users',
        columns: [
          { name: 'id', type: 'BIGINT', note: 'PK' },
          { name: 'name', type: 'VARCHAR(100)' },
          { name: 'email', type: 'VARCHAR(150)', note: 'UNIQUE' },
          { name: 'password_hash', type: 'VARCHAR(255)' },
          { name: 'role', type: "ENUM('farmer','buyer')" },
        ],
      },
      {
        name: 'products',
        columns: [
          { name: 'id', type: 'BIGINT', note: 'PK' },
          { name: 'farmer_id', type: 'BIGINT', note: 'FK → users.id' },
          { name: 'title', type: 'VARCHAR(150)' },
          { name: 'price', type: 'DECIMAL(10,2)' },
          { name: 'quantity', type: 'INT' },
        ],
      },
      {
        name: 'orders',
        columns: [
          { name: 'id', type: 'BIGINT', note: 'PK' },
          { name: 'buyer_id', type: 'BIGINT', note: 'FK → users.id' },
          { name: 'product_id', type: 'BIGINT', note: 'FK → products.id' },
          { name: 'quantity', type: 'INT' },
          { name: 'status', type: "ENUM('pending','confirmed','delivered')" },
          { name: 'created_at', type: 'DATETIME' },
        ],
      },
    ],
    features: [
      'Secure registration flow separating farmer and buyer roles',
      'Product listing management with live quantity tracking',
      'Order placement and status tracking end-to-end',
      'Relational schema keeping users, products, and transactions consistent',
    ],
    challenges: [
      {
        problem: 'Preventing overselling when multiple buyers order the same limited-quantity listing.',
        solution:
          'Quantity checks were pushed into the order-creation logic itself, decrementing stock atomically at write time rather than trusting client-side quantity values.',
      },
      {
        problem: 'Keeping the schema flexible enough for two very different user roles (farmer vs buyer) without duplicating tables.',
        solution:
          'Used a single users table with a role column rather than separate farmer/buyer tables, simplifying auth and foreign keys across products and orders.',
      },
    ],
    learnings: [
      'End-to-end ownership of a web application, from schema design through UI',
      'How relational constraints (foreign keys, enums) prevent entire classes of bad data',
      'The tradeoffs of building commerce logic without a framework to lean on',
    ],
    githubUrl: '////',
    liveUrl: null,
  },
  {
    slug: 'todo-list-manager',
    name: 'To-Do List Manager',
    period: 'Jun 2025 – Aug 2025',
    status: 'shipped',
    oneLiner: 'A full-stack task manager with a proper REST backend — the project that made Spring Boot click.',
    description: [
      'A full-stack task management application with authentication and task prioritization, built to go deeper on Spring Boot fundamentals than the previous project allowed.',
      'The backend is a real REST API — Spring Boot and Spring Data JPA over MySQL — with structured error handling instead of bare stack traces.',
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Bootstrap'],
    architecture: {
      layers: [
        'Client (Bootstrap UI)',
        'Spring Boot REST Controllers',
        'Service Layer (business logic)',
        'Spring Data JPA Repositories',
        'MySQL Database',
      ],
      summary:
        'A standard layered Spring Boot architecture: controllers expose REST endpoints, a service layer holds task-prioritization and validation logic, and Spring Data JPA repositories talk to MySQL — keeping HTTP concerns fully separate from persistence concerns.',
    },
    endpoints: [
      { method: 'GET', path: '/api/tasks', description: 'Retrieve all tasks for the authenticated user' },
      { method: 'GET', path: '/api/tasks/{id}', description: 'Retrieve a single task by ID' },
      { method: 'POST', path: '/api/tasks', description: 'Create a new task' },
      { method: 'PUT', path: '/api/tasks/{id}', description: 'Update a task (title, priority, due date, status)' },
      { method: 'DELETE', path: '/api/tasks/{id}', description: 'Delete a task' },
      { method: 'POST', path: '/api/auth/login', description: 'Authenticate a user and issue a session token' },
    ],
    schema: [
      {
        name: 'users',
        columns: [
          { name: 'id', type: 'BIGINT', note: 'PK' },
          { name: 'username', type: 'VARCHAR(50)', note: 'UNIQUE' },
          { name: 'password_hash', type: 'VARCHAR(255)' },
        ],
      },
      {
        name: 'tasks',
        columns: [
          { name: 'id', type: 'BIGINT', note: 'PK' },
          { name: 'user_id', type: 'BIGINT', note: 'FK → users.id' },
          { name: 'title', type: 'VARCHAR(200)' },
          { name: 'priority', type: "ENUM('low','medium','high')" },
          { name: 'status', type: "ENUM('pending','in_progress','done')" },
          { name: 'due_date', type: 'DATE' },
        ],
      },
    ],
    features: [
      'Full CRUD REST API for task management',
      'Task prioritization (low / medium / high) with due-date tracking',
      'Centralized exception handling returning structured error responses',
      'Clean separation of controller, service, and repository layers',
    ],
    challenges: [
      {
        problem: 'Early versions leaked raw exceptions (stack traces) back to the client on bad input.',
        solution:
          'Introduced a global exception handler (@ControllerAdvice) to convert exceptions into consistent JSON error responses with proper HTTP status codes.',
      },
      {
        problem: 'Understanding when Spring Data JPA generates the right SQL automatically versus when a custom query is needed.',
        solution:
          'Used derived query methods for simple lookups and dropped into @Query with JPQL for priority-based filtering, learning to read the generated SQL in logs to verify correctness.',
      },
    ],
    learnings: [
      'How Spring Boot wires controllers, services, and repositories together via dependency injection',
      'Designing REST endpoints that map cleanly to CRUD operations',
      'Why centralized error handling matters for API consumers, not just for looks',
    ],
    githubUrl: '///',
    liveUrl: null,
  },
];
