import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  FaRocket, 
  FaUsers, 
  FaChartLine, 
  FaCog,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaDownload,
  FaUpload,
  FaBell,
  FaDollarSign,
  FaCalendar,
  FaCheck,
  FaClock,
  FaExclamationTriangle
} from 'react-icons/fa';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [showModal, setShowModal] = useState(false);

  // Datos simulados para el admin
  const stats = {
    totalUsers: 24,
    activeServices: 18,
    monthlyRevenue: 12450,
    pendingTasks: 7,
    completedDeliverables: 45,
    activeClients: 15
  };

  const recentUsers = [
    { id: 1, name: "María González", email: "maria@email.com", status: "active", joinDate: "2024-01-15" },
    { id: 2, name: "Carlos Rodríguez", email: "carlos@email.com", status: "active", joinDate: "2024-01-20" },
    { id: 3, name: "Ana Martínez", email: "ana@email.com", status: "pending", joinDate: "2024-02-01" },
    { id: 4, name: "Luis Pérez", email: "luis@email.com", status: "active", joinDate: "2024-02-05" }
  ];

  const activeServices = [
    { id: 1, client: "María González", service: "Gestión de Redes Sociales", progress: 75, status: "en_progreso" },
    { id: 2, client: "Carlos Rodríguez", service: "Marketing Digital", progress: 45, status: "en_progreso" },
    { id: 3, client: "Ana Martínez", service: "Branding y Diseño", progress: 90, status: "en_progreso" },
    { id: 4, client: "Luis Pérez", service: "Consultoría Estratégica", progress: 30, status: "en_progreso" }
  ];

  const pendingDeliverables = [
    { id: 1, client: "María González", service: "Redes Sociales", deliverable: "Diseños de posts", dueDate: "2024-02-15" },
    { id: 2, client: "Carlos Rodríguez", service: "Marketing Digital", deliverable: "Configuración GHL", dueDate: "2024-02-18" },
    { id: 3, client: "Ana Martínez", service: "Branding", deliverable: "Logo final", dueDate: "2024-02-20" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-bizon-accent bg-bizon-light-gray';
      case 'inactive': return 'text-red-600 bg-red-100';
      case 'en_progreso': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Activo';
      case 'pending': return 'Pendiente';
      case 'inactive': return 'Inactivo';
      case 'en_progreso': return 'En Progreso';
      default: return 'Desconocido';
    }
  };

  return (
    <div className="min-h-screen bg-bizon-light-gray pt-16 sm:pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-bizon-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-bizon-accent to-bizon-blue rounded-lg flex items-center justify-center">
                <FaCog className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-bizon-dark-blue">
                  Panel de Administración
                </h1>
                <p className="text-bizon-gray text-sm">
                  Admin: {user?.name}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={logout}
                className="btn-secondary"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-bizon-blue to-bizon-light-blue rounded-lg flex items-center justify-center mr-4">
                <FaUsers className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-bizon-gray text-sm">Total Usuarios</p>
                <p className="text-2xl font-bold text-bizon-dark-blue">{stats.totalUsers}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card p-6"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                <FaRocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-bizon-gray text-sm">Servicios Activos</p>
                <p className="text-2xl font-bold text-bizon-dark-blue">{stats.activeServices}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card p-6"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-bizon-accent to-bizon-blue rounded-lg flex items-center justify-center mr-4">
                <FaDollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-bizon-gray text-sm">Ingresos Mensuales</p>
                <p className="text-2xl font-bold text-bizon-dark-blue">${stats.monthlyRevenue.toLocaleString()}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card p-6"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                <FaExclamationTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-bizon-gray text-sm">Tareas Pendientes</p>
                <p className="text-2xl font-bold text-bizon-dark-blue">{stats.pendingTasks}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-bizon-light-gray mb-8">
          <div className="border-b border-bizon-light-gray">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Resumen', icon: FaChartLine },
                { id: 'users', name: 'Usuarios', icon: FaUsers },
                { id: 'services', name: 'Servicios', icon: FaRocket },
                { id: 'deliverables', name: 'Entregables', icon: FaDownload },
                { id: 'settings', name: 'Configuración', icon: FaCog }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-bizon-blue text-bizon-blue'
                      : 'border-transparent text-bizon-gray hover:text-bizon-dark-blue'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Recent Users */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold text-bizon-dark-blue">
                        Usuarios Recientes
                      </h2>
                      <button className="btn-primary text-sm px-4 py-2">
                        <FaPlus className="w-4 h-4 mr-2" />
                        Agregar Usuario
                      </button>
                    </div>
                    <div className="space-y-3">
                      {recentUsers.map((user, index) => (
                        <motion.div
                          key={user.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 bg-bizon-light-gray rounded-lg"
                        >
                          <div>
                            <p className="font-medium text-bizon-dark-blue">{user.name}</p>
                            <p className="text-sm text-bizon-gray">{user.email}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                              {getStatusText(user.status)}
                            </span>
                            <button className="text-bizon-gray hover:text-bizon-blue">
                              <FaEye className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Active Services */}
                  <div>
                    <h2 className="text-xl font-bold text-bizon-dark-blue mb-4">
                      Servicios Activos
                    </h2>
                    <div className="space-y-4">
                      {activeServices.map((service, index) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="card p-4"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <p className="font-medium text-bizon-dark-blue">{service.client}</p>
                              <p className="text-sm text-bizon-gray">{service.service}</p>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                              {getStatusText(service.status)}
                            </span>
                          </div>
                          <div className="mb-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-bizon-gray">Progreso</span>
                              <span className="text-bizon-dark-blue font-medium">{service.progress}%</span>
                            </div>
                            <div className="w-full bg-bizon-light-gray rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-bizon-blue to-bizon-light-blue h-2 rounded-full transition-all duration-300"
                                style={{ width: `${service.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-bizon-dark-blue">
                    Gestión de Usuarios
                  </h2>
                  <button 
                    onClick={() => setShowModal(true)}
                    className="btn-primary"
                  >
                    <FaPlus className="w-4 h-4 mr-2" />
                    Nuevo Usuario
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-bizon-light-gray">
                        <th className="text-left py-3 px-4 font-semibold text-bizon-dark-blue">Usuario</th>
                        <th className="text-left py-3 px-4 font-semibold text-bizon-dark-blue">Email</th>
                        <th className="text-left py-3 px-4 font-semibold text-bizon-dark-blue">Estado</th>
                        <th className="text-left py-3 px-4 font-semibold text-bizon-dark-blue">Fecha de Registro</th>
                        <th className="text-left py-3 px-4 font-semibold text-bizon-dark-blue">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user, index) => (
                        <motion.tr
                          key={user.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border-b border-bizon-light-gray hover:bg-bizon-light-gray/50"
                        >
                          <td className="py-3 px-4">
                            <p className="font-medium text-bizon-dark-blue">{user.name}</p>
                          </td>
                          <td className="py-3 px-4 text-bizon-gray">{user.email}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                              {getStatusText(user.status)}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-bizon-gray">
                            {new Date(user.joinDate).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <button className="text-bizon-blue hover:text-bizon-dark-blue">
                                <FaEye className="w-4 h-4" />
                              </button>
                              <button className="text-bizon-accent hover:text-bizon-blue">
                                <FaEdit className="w-4 h-4" />
                              </button>
                              <button className="text-red-500 hover:text-red-700">
                                <FaTrash className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-bizon-dark-blue">
                    Gestión de Servicios
                  </h2>
                  <button className="btn-primary">
                    <FaPlus className="w-4 h-4 mr-2" />
                    Nuevo Servicio
                  </button>
                </div>
                <div className="space-y-4">
                  {activeServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-bizon-dark-blue">
                            {service.service} - {service.client}
                          </h3>
                          <p className="text-bizon-gray">ID: {service.id}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                            {getStatusText(service.status)}
                          </span>
                          <button className="btn-secondary text-sm px-4 py-2">
                            <FaEdit className="w-4 h-4 mr-2" />
                            Editar
                          </button>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-bizon-gray">Progreso general</span>
                          <span className="text-bizon-dark-blue font-medium">{service.progress}%</span>
                        </div>
                        <div className="w-full bg-bizon-light-gray rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-bizon-blue to-bizon-light-blue h-3 rounded-full transition-all duration-300"
                            style={{ width: `${service.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button className="btn-primary text-sm px-4 py-2">
                            <FaUpload className="w-4 h-4 mr-2" />
                            Subir Entregable
                          </button>
                          <button className="btn-secondary text-sm px-4 py-2">
                            <FaChartLine className="w-4 h-4 mr-2" />
                            Ver Progreso
                          </button>
                        </div>
                        <button className="text-red-500 hover:text-red-700">
                          <FaTrash className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Deliverables Tab */}
            {activeTab === 'deliverables' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-bizon-dark-blue">
                    Entregables Pendientes
                  </h2>
                  <button className="btn-primary">
                    <FaUpload className="w-4 h-4 mr-2" />
                    Subir Entregable
                  </button>
                </div>
                <div className="space-y-4">
                  {pendingDeliverables.map((deliverable, index) => (
                    <motion.div
                      key={deliverable.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-bizon-dark-blue">
                            {deliverable.deliverable}
                          </h3>
                          <p className="text-bizon-gray">{deliverable.client} - {deliverable.service}</p>
                          <p className="text-sm text-bizon-gray">
                            Fecha límite: {new Date(deliverable.dueDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="px-3 py-1 rounded-full text-sm font-medium text-bizon-accent bg-bizon-light-gray">
                            Pendiente
                          </span>
                          <button className="btn-primary text-sm px-4 py-2">
                            <FaUpload className="w-4 h-4 mr-2" />
                            Completar
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-bold text-bizon-dark-blue mb-6">
                  Configuración del Sistema
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-bizon-dark-blue mb-4">
                      Configuración General
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-bizon-gray mb-2">
                          Nombre de la Empresa
                        </label>
                        <input
                          type="text"
                          defaultValue="Growth Bizon LLC"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-bizon-gray mb-2">
                          Email de Contacto
                        </label>
                        <input
                          type="email"
                          defaultValue="info@growthbizon.com"
                          className="input-field"
                        />
                      </div>
                      <button className="btn-primary w-full">
                        Guardar Cambios
                      </button>
                    </div>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-bizon-dark-blue mb-4">
                      Notificaciones
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-bizon-gray">Notificaciones por email</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-bizon-gray">Notificaciones push</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-bizon-gray">Reportes semanales</span>
                        <input type="checkbox" className="rounded" />
                      </div>
                      <button className="btn-secondary w-full">
                        Actualizar Preferencias
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
