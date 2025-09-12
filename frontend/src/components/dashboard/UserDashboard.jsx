import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  FaRocket, 
  FaChartLine, 
  FaUsers, 
  FaInstagram,
  FaDownload,
  FaEye,
  FaCheck,
  FaClock,
  FaBell,
  FaArrowRight,
  FaStar
} from 'react-icons/fa';

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Datos simulados del usuario
  const userServices = [
    {
      id: 1,
      name: "Gestión de Redes Sociales",
      type: "Instagram, Facebook",
      status: "en_progreso",
      progress: 75,
      startDate: "2024-01-15",
      endDate: "2024-04-15",
      deliverables: [
        { id: 1, name: "Plan de contenido Q1", status: "completed", date: "2024-01-20" },
        { id: 2, name: "Diseños de posts", status: "pending_approval", date: "2024-02-01" },
        { id: 3, name: "Reporte de métricas", status: "in_progress", date: "2024-02-15" }
      ]
    },
    {
      id: 2,
      name: "Marketing Digital",
      type: "SEO, Google Ads",
      status: "pendiente",
      progress: 25,
      startDate: "2024-02-01",
      endDate: "2024-05-01",
      deliverables: [
        { id: 4, name: "Auditoría SEO", status: "completed", date: "2024-02-05" },
        { id: 5, name: "Estrategia de keywords", status: "in_progress", date: "2024-02-10" }
      ]
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "deliverable",
      message: "Nuevo entregable disponible: Diseños de posts para Instagram",
      date: "2024-02-01",
      read: false
    },
    {
      id: 2,
      type: "progress",
      message: "Tu servicio de Marketing Digital ha avanzado al 25%",
      date: "2024-02-10",
      read: true
    },
    {
      id: 3,
      type: "approval",
      message: "Necesitamos tu aprobación para los posts de la semana",
      date: "2024-02-12",
      read: false
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in_progress': return 'text-blue-600 bg-blue-100';
      case 'pending_approval': return 'text-bizon-accent bg-bizon-light-gray';
      case 'en_progreso': return 'text-blue-600 bg-blue-100';
      case 'pendiente': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completado';
      case 'in_progress': return 'En Progreso';
      case 'pending_approval': return 'Pendiente de Aprobación';
      case 'en_progreso': return 'En Progreso';
      case 'pendiente': return 'Pendiente';
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
              <div className="w-10 h-10 bg-gradient-to-r from-bizon-blue to-bizon-light-blue rounded-lg flex items-center justify-center">
                <FaRocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-bizon-dark-blue">
                  Dashboard de Growth Bizon
                </h1>
                <p className="text-bizon-gray text-sm">
                  Bienvenido, {user?.name}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button className="p-2 text-bizon-gray hover:text-bizon-blue transition-colors">
                  <FaBell className="w-5 h-5" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {notifications.filter(n => !n.read).length}
                    </span>
                  )}
                </button>
              </div>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-bizon-blue to-bizon-light-blue rounded-lg flex items-center justify-center mr-4">
                <FaRocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-bizon-gray text-sm">Servicios Activos</p>
                <p className="text-2xl font-bold text-bizon-dark-blue">
                  {userServices.filter(s => s.status === 'en_progreso').length}
                </p>
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
                <FaCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-bizon-gray text-sm">Entregables</p>
                <p className="text-2xl font-bold text-bizon-dark-blue">
                  {userServices.reduce((acc, service) => 
                    acc + service.deliverables.filter(d => d.status === 'completed').length, 0
                  )}
                </p>
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
                <FaClock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-bizon-gray text-sm">Pendientes</p>
                <p className="text-2xl font-bold text-bizon-dark-blue">
                  {userServices.reduce((acc, service) => 
                    acc + service.deliverables.filter(d => d.status === 'pending_approval').length, 0
                  )}
                </p>
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
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                <FaChartLine className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-bizon-gray text-sm">Progreso Promedio</p>
                <p className="text-2xl font-bold text-bizon-dark-blue">
                  {Math.round(userServices.reduce((acc, service) => acc + service.progress, 0) / userServices.length)}%
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-bizon-light-gray mb-8">
          <div className="border-b border-bizon-light-gray">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Resumen', icon: FaRocket },
                { id: 'services', name: 'Mis Servicios', icon: FaUsers },
                { id: 'deliverables', name: 'Entregables', icon: FaDownload },
                { id: 'notifications', name: 'Notificaciones', icon: FaBell }
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
                <h2 className="text-xl font-bold text-bizon-dark-blue mb-6">
                  Resumen de tus servicios
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {userServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-bizon-dark-blue">
                          {service.name}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                          {getStatusText(service.status)}
                        </span>
                      </div>
                      
                      <p className="text-bizon-gray text-sm mb-4">{service.type}</p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
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

                      <div className="flex justify-between text-sm text-bizon-gray">
                        <span>Inicio: {new Date(service.startDate).toLocaleDateString()}</span>
                        <span>Fin: {new Date(service.endDate).toLocaleDateString()}</span>
                      </div>
                    </motion.div>
                  ))}
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
                <h2 className="text-xl font-bold text-bizon-dark-blue mb-6">
                  Detalle de servicios
                </h2>
                <div className="space-y-6">
                  {userServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-bizon-dark-blue">
                            {service.name}
                          </h3>
                          <p className="text-bizon-gray">{service.type}</p>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                          {getStatusText(service.status)}
                        </span>
                      </div>

                      <div className="mb-6">
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-bizon-gray">Fecha de inicio:</span>
                          <p className="font-medium">{new Date(service.startDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <span className="text-bizon-gray">Fecha de finalización:</span>
                          <p className="font-medium">{new Date(service.endDate).toLocaleDateString()}</p>
                        </div>
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
                <h2 className="text-xl font-bold text-bizon-dark-blue mb-6">
                  Entregables disponibles
                </h2>
                <div className="space-y-4">
                  {userServices.flatMap(service => 
                    service.deliverables.map(deliverable => ({
                      ...deliverable,
                      serviceName: service.name
                    }))
                  ).map((deliverable, index) => (
                    <motion.div
                      key={deliverable.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-bizon-dark-blue">
                            {deliverable.name}
                          </h4>
                          <p className="text-sm text-bizon-gray">{deliverable.serviceName}</p>
                          <p className="text-xs text-bizon-gray">
                            {new Date(deliverable.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(deliverable.status)}`}>
                            {getStatusText(deliverable.status)}
                          </span>
                          {deliverable.status === 'completed' && (
                            <button className="btn-primary text-sm px-4 py-2">
                              <FaDownload className="w-4 h-4 mr-2" />
                              Descargar
                            </button>
                          )}
                          {deliverable.status === 'pending_approval' && (
                            <button className="btn-secondary text-sm px-4 py-2">
                              <FaEye className="w-4 h-4 mr-2" />
                              Revisar
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-bold text-bizon-dark-blue mb-6">
                  Notificaciones recientes
                </h2>
                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`card p-4 ${!notification.read ? 'border-l-4 border-bizon-blue' : ''}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-bizon-dark-blue font-medium">
                            {notification.message}
                          </p>
                          <p className="text-sm text-bizon-gray mt-1">
                            {new Date(notification.date).toLocaleDateString()}
                          </p>
                        </div>
                        {!notification.read && (
                          <span className="w-2 h-2 bg-bizon-blue rounded-full"></span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
