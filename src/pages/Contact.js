import Footer from "../components/Footer.js"

export default function Contact() {
    return(
        <section class="min-h-screen bg-cover  bg-class-bg">
        <div class="flex flex-col min-h-screen bg-black/60" >
            <div class="container flex flex-col flex-1 px-6 py-12 mx-auto">
                <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
                    <div class="text-white lg:w-1/2 lg:mx-6">
                        <h1 class="text-3xl font-semibold capitalize lg:text-4xl">Get in Contact with us</h1>
    
                        <p class="max-w-xl mt-6">
                            To contact us please use the form or email us at: <b>vishnuboys@gmail.com</b><br/>
                            You can also contact our phone number : <b>123-456-789</b>
                        </p>
                        <br/>
                        <p>Please allow 1-2 business days for a response on initial inquiries.</p>
    
                        <button class="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-600 rounded-md hover:bg-amber-500 focus:outline-none focus:ring focus:ring-amber-400 focus:ring-opacity-50">
                            get in touch
                        </button>
    
                    </div>
    
                    <div class="mt-8 lg:w-1/2 lg:mx-6">
                        <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                            <h1 class="text-2xl font-medium text-gray-700 dark:text-gray-200">Contact Form</h1>
    
                            <p class="mt-4 text-gray-500 dark:text-gray-400">
                                Ask us everything, we would love
                                to hear from you
                            </p>
    
                            <form class="mt-6">
                                <div class="flex-1">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                    <input type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 focus:ring-amber-300 focus:ring-opacity-40 dark:focus:border-amber-300 focus:outline-none focus:ring" />
                                </div>
    
                                <div class="flex-1 mt-6">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 focus:ring-amber-300 focus:ring-opacity-40 dark:focus:border-amber-300 focus:outline-none focus:ring" />
                                </div>
    
                                <div class="w-full mt-6">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                    <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 focus:ring-amber-300 focus:ring-opacity-40 dark:focus:border-amber-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                                </div>
    
                                <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-600 rounded-md hover:bg-amber-500 focus:outline-none focus:ring focus:ring-amber-400 focus:ring-opacity-50">
                                    get in touch
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )

}