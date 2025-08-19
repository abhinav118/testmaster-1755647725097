import { siteData, navigation } from '@/lib/data'

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">{siteData?.settings?.appName || 'TestMaster'}</h1>
            <div className="flex space-x-6">
              {[{"label":"Dashboard","route":"/","icon":"home"},{"label":"Tests","route":"/tests","icon":"clipboard-list"},{"label":"Create Test","route":"/create-test","icon":"plus-circle"},{"label":"Students","route":"/students","icon":"users"},{"label":"Results","route":"/results","icon":"chart-bar"},{"label":"Settings","route":"/settings","icon":"cog"}].map((item: any, index: number) => (
                <a key={index} href={item.route} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container py-8">
        <div className="card p-8 max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Test Results</h2>
          <p className="text-gray-600 text-lg leading-relaxed">View and analyze test results</p>
          <div className="mt-6">
            <button className="btn btn-primary mr-4">Learn More</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Data Table</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Item {item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Type {item}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container text-center">
          <p>&copy; 2024 {siteData?.settings?.appName || 'TestMaster'}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}