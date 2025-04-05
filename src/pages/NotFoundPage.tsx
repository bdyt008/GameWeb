import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="text-9xl font-bold text-primary-600 mb-4">404</div>
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="text-xl text-secondary-600 dark:text-secondary-400 mb-8">
        Sorry, the page you requested does not exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
      >
        Return to Home
      </Link>
    </div>
  )
}

export default NotFoundPage 