import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { cakes } from '../data/cakes'
import { cakeCategories } from '../data/cakeCategories'
import { generateWhatsAppMessage } from '../utils/generateWhatsAppMessage'
import Footer from '../components/Footer'

const Order = () => {
  const [searchParams] = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedCake, setSelectedCake] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    cakeName: '',
    category: '',
    size: '',
    flavor: '',
    deliveryType: 'pickup',
    address: '',
    dateNeeded: '',
    messageOnCake: '',
    themeDescription: '',
    additionalNotes: ''
  })

  useEffect(() => {
    const cakeId = searchParams.get('cake')
    if (cakeId) {
      const cake = cakes.find(c => c.id === parseInt(cakeId))
      if (cake) {
        setSelectedCake(cake)
        const category = cakeCategories.find(cat => cat.id === cake.category)
        setSelectedCategory(category)
        setFormData(prev => ({
          ...prev,
          cakeName: cake.name,
          category: category.name,
          price: cake.price
        }))
      }
    }
  }, [searchParams])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.customerName && formData.customerPhone
      case 2:
        return formData.size && formData.flavor
      case 3:
        return formData.dateNeeded && (formData.deliveryType === 'pickup' || formData.address)
      default:
        return true
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = () => {
    const whatsappUrl = generateWhatsAppMessage(formData)
    window.open(whatsappUrl, '_blank')
  }

  const steps = [
    { number: 1, title: 'Customer Info' },
    { number: 2, title: 'Cake Details' },
    { number: 3, title: 'Delivery' },
    { number: 4, title: 'Review' }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-brown mb-4">
            Order Your Cake
          </h1>
          <p className="text-lg text-brown/70">
            Follow our simple 4-step process to order your perfect cake
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-between mb-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center flex-1">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                  currentStep >= step.number
                    ? 'bg-brown text-white'
                    : 'bg-beige text-brown/50'
                }`}
              >
                {step.number}
              </div>
              <span className={`text-sm mt-2 text-center ${
                currentStep >= step.number ? 'text-brown' : 'text-brown/50'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-3xl shadow-luxury p-8 md:p-12">
          {/* Step 1: Customer Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-brown mb-6">Customer Information</h2>
              <div>
                <label className="block text-brown font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-brown/20 rounded-xl focus:outline-none focus:border-brown transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-brown font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-brown/20 rounded-xl focus:outline-none focus:border-brown transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          )}

          {/* Step 2: Cake Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-brown mb-6">Cake Details</h2>
              
              {selectedCake && (
                <div className="bg-beige/30 p-4 rounded-xl">
                  <p className="text-brown/70">Selected Cake:</p>
                  <p className="font-semibold text-brown">{formData.cakeName}</p>
                  <p className="text-brown/60">KES {formData.price?.toLocaleString() || '0'}</p>
                </div>
              )}

              <div>
                <label className="block text-brown font-medium mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={(e) => {
                    const category = cakeCategories.find(cat => cat.name === e.target.value)
                    setSelectedCategory(category)
                    handleInputChange(e)
                  }}
                  className="w-full px-4 py-3 border border-brown/20 rounded-xl focus:outline-none focus:border-brown transition-colors"
                >
                  <option value="">Select a category</option>
                  {cakeCategories.map(category => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedCategory && (
                <>
                  <div>
                    <label className="block text-brown font-medium mb-2">Size *</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {selectedCategory.sizes.map(size => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, size }))}
                          className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                            formData.size === size
                              ? 'border-brown bg-brown text-white'
                              : 'border-brown/20 hover:border-brown/50'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-brown font-medium mb-2">Flavor *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {selectedCategory.flavors.map(flavor => (
                        <button
                          key={flavor}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, flavor }))}
                          className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                            formData.flavor === flavor
                              ? 'border-brown bg-brown text-white'
                              : 'border-brown/20 hover:border-brown/50'
                          }`}
                        >
                          {flavor}
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedCategory.requiresMessage && (
                    <div>
                      <label className="block text-brown font-medium mb-2">Message on Cake</label>
                      <input
                        type="text"
                        name="messageOnCake"
                        value={formData.messageOnCake}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-brown/20 rounded-xl focus:outline-none focus:border-brown transition-colors"
                        placeholder="Enter your message"
                      />
                    </div>
                  )}

                  {selectedCategory.requiresCustomTheme && (
                    <div>
                      <label className="block text-brown font-medium mb-2">Theme Description</label>
                      <textarea
                        name="themeDescription"
                        value={formData.themeDescription}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-brown/20 rounded-xl focus:outline-none focus:border-brown transition-colors"
                        placeholder="Describe your desired theme"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* Step 3: Delivery */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-brown mb-6">Delivery Information</h2>
              
              <div>
                <label className="block text-brown font-medium mb-2">Delivery Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, deliveryType: 'pickup' }))}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.deliveryType === 'pickup'
                        ? 'border-brown bg-brown text-white'
                        : 'border-brown/20 hover:border-brown/50'
                    }`}
                  >
                    Pickup
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, deliveryType: 'delivery' }))}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.deliveryType === 'delivery'
                        ? 'border-brown bg-brown text-white'
                        : 'border-brown/20 hover:border-brown/50'
                    }`}
                  >
                    Delivery
                  </button>
                </div>
              </div>

              {formData.deliveryType === 'delivery' && (
                <div>
                  <label className="block text-brown font-medium mb-2">Delivery Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-brown/20 rounded-xl focus:outline-none focus:border-brown transition-colors"
                    placeholder="Enter your delivery address"
                  />
                </div>
              )}

              <div>
                <label className="block text-brown font-medium mb-2">Date Needed *</label>
                <input
                  type="date"
                  name="dateNeeded"
                  value={formData.dateNeeded}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-brown/20 rounded-xl focus:outline-none focus:border-brown transition-colors"
                />
              </div>

              <div>
                <label className="block text-brown font-medium mb-2">Additional Notes</label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-brown/20 rounded-xl focus:outline-none focus:border-brown transition-colors"
                  placeholder="Any special instructions or notes"
                />
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-brown mb-6">Order Summary</h2>
              
              <div className="bg-beige/30 p-6 rounded-xl space-y-4">
                <div>
                  <span className="text-brown/70">Customer:</span>
                  <p className="font-semibold text-brown">{formData.customerName}</p>
                  <p className="text-brown">{formData.customerPhone}</p>
                </div>
                
                <div>
                  <span className="text-brown/70">Cake:</span>
                  <p className="font-semibold text-brown">{formData.cakeName}</p>
                  <p className="text-brown">{formData.category}</p>
                  <p className="text-brown">{formData.size} - {formData.flavor}</p>
                </div>
                
                <div>
                  <span className="text-brown/70">Delivery:</span>
                  <p className="font-semibold text-brown capitalize">{formData.deliveryType}</p>
                  {formData.address && <p className="text-brown">{formData.address}</p>}
                  <p className="text-brown">{formData.dateNeeded}</p>
                </div>
                
                {formData.messageOnCake && (
                  <div>
                    <span className="text-brown/70">Message on Cake:</span>
                    <p className="text-brown">{formData.messageOnCake}</p>
                  </div>
                )}
                
                {formData.themeDescription && (
                  <div>
                    <span className="text-brown/70">Theme:</span>
                    <p className="text-brown">{formData.themeDescription}</p>
                  </div>
                )}
                
                {formData.additionalNotes && (
                  <div>
                    <span className="text-brown/70">Additional Notes:</span>
                    <p className="text-brown">{formData.additionalNotes}</p>
                  </div>
                )}
                
                <div className="pt-4 border-t border-brown/20">
                  <span className="text-brown/70">Total Price:</span>
                  <p className="text-2xl font-bold text-brown">KES {formData.price?.toLocaleString() || '0'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-12">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                currentStep === 1
                  ? 'bg-beige text-brown/50 cursor-not-allowed'
                  : 'btn-secondary'
              }`}
            >
              Previous
            </button>
            
            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                disabled={!validateStep(currentStep)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  validateStep(currentStep)
                    ? 'btn-primary'
                    : 'bg-beige text-brown/50 cursor-not-allowed'
                }`}
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="btn-primary"
              >
                Send to WhatsApp
              </button>
            )}
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  )
}

export default Order
