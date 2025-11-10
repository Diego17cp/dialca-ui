# Screaming Architecture (by Dialcadev)

        Base Structure:

        ```
        src/
        ├── app/        # Application-level components and configurations
        ├── core/       # Application core (e.g., routing, theming)
        ├── features/   # Feature-based modules
        │   └── example/   # Example feature
        │       ├── components/  # Feature-specific components
        │       ├── hooks/       # Feature-specific hooks
        │       ├── utils/       # Feature-specific utilities
        │       ├── pages/       # Feature-specific pages
        │       ├── constants/   # Feature-specific constants
        │       ├── types/       # Feature-specific types (if using TypeScript)
        │       ├── contexts/    # Feature-specific contexts
        │       ├── stores/      # Feature-specific state management
        │       └── services/    # Feature-specific services (e.g., API calls)
        └── shared/    # Shared components, hooks, and utilities across features
        ```