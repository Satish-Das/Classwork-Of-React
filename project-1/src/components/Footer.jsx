import React from 'react'

const Footer = () => {
  return (
        // <footer className="bg-white dark:bg-gray-900">
        //     <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        //         <div className="md:flex md:justify-between">
        //         <div className="mb-6 md:mb-0">
        //             <a href="#" className="flex items-center">
        //                 <div classNameName='text-white text-2xl font-bold '>Color Studio </div>
        //             </a>
        //         </div>
        //         <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        //             <div>
        //                 <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
        //                 <ul className="text-gray-500 dark:text-gray-400 font-medium">
        //                     <li className="mb-4">
        //                         <a href="#" className="hover:underline">Color Studio</a>
        //                     </li>
        //                     <li>
        //                         <a href="#" className="hover:underline">Tailwind CSS</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div>
        //                 <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
        //                 <ul className="text-gray-500 dark:text-gray-400 font-medium">
        //                     <li className="mb-4">
        //                         <a href="https://github.com/Satish-Das" className="hover:underline ">Github</a>
        //                     </li>
        //                     <li>
        //                         <a href="#" className="hover:underline">Discord</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div>
        //                 <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
        //                 <ul className="text-gray-500 dark:text-gray-400 font-medium">
        //                     <li className="mb-4">
        //                         <a href="#" className="hover:underline">Privacy Policy</a>
        //                     </li>
        //                     <li>
        //                         <a href="#" className="hover:underline">Terms &amp; Conditions</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        //     <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        //     <div className="sm:flex sm:items-center sm:justify-between">
        //         <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Satish-Das</a>. All Rights Reserved.
        //         </span>
        //         <div className="flex mt-4 sm:justify-center sm:mt-0">
        //             <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
        //                 <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
        //                         <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
        //                     </svg>
        //                 <span className="sr-only">Facebook page</span>
        //             </a>
        //             <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        //                 <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
        //                         <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
        //                     </svg>
        //                 <span className="sr-only">Discord community</span>
        //             </a>
        //             <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        //                 <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
        //                     <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
        //                 </svg>
        //                 <span className="sr-only">Twitter page</span>
        //             </a>
        //             <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        //                 <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        //                         <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
        //                 </svg>
        //                 <span className="sr-only">GitHub account</span>
        //             </a>
        //             <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        //                 <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        //                     <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
        //                 </svg>
        //                 <span className="sr-only">Dribbble account</span>
        //             </a>
        //         </div>
        //     </div>
        //     </div>
        // </footer>

        <section className="py-10 bg-blue-900 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12">
                <div>
                    <img className="w-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg" alt="" />
    
                    <ul className="mt-8 space-y-4">
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> About </a>
                        </li>
    
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Features </a>
                        </li>
    
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Works </a>
                        </li>
    
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Career </a>
                        </li>
                    </ul>
                </div>
    
                <div>
                    <p className="text-lg font-semibold text-white">Help</p>
    
                    <ul className="mt-8 space-y-4">
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Customer Support </a>
                        </li>
    
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Delivery Details </a>
                        </li>
    
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Terms & Conditions </a>
                        </li>
    
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Privacy Policy </a>
                        </li>
                    </ul>
                </div>
    
                <div>
                    <p className="text-lg font-semibold text-white">Resources</p>
    
                    <ul className="mt-8 space-y-4">
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Free eBooks </a>
                        </li>
    
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Development Tutorial </a>
                        </li>
    
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> How to - Blog </a>
                        </li>
    
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> YouTube Playlist </a>
                        </li>
                    </ul>
                </div>
    
                <div>
                    <p className="text-lg font-semibold text-white">Extra Links</p>
    
                    <ul className="mt-8 space-y-4">
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Customer Support </a>
                        </li>
    
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Delivery Details </a>
                        </li>
    
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Terms & Conditions </a>
                        </li>
    
                        <li>
                            <a href="#" title="" className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Privacy Policy </a>
                        </li>
                    </ul>
                </div>
            </div>
    
            <div className="mt-20 md:mt-28 2xl:mt-32">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="sm:flex sm:items-center sm:justify-start sm:space-x-8">
                        <ul className="flex items-center justify-start space-x-8">
                            <li>
                                <a href="#" title="" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
    
                            <li>
                                <a href="#" title="" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </a>
                            </li>
    
                            <li>
                                <a href="#" title="" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                        <path
                                            d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
    
                            <li>
                                <a href="#" title="" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
    
                        <ul className="flex flex-wrap items-center justify-start mt-5 gap-x-8 sm:mt-0 gap-y-3">
                            <li>
                                <a href="#" title="" className="text-sm text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Privacy Policy </a>
                            </li>
    
                            <li>
                                <a href="#" title="" className="text-sm text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Terms & Conditions </a>
                            </li>
    
                            <li>
                                <a href="#" title="" className="text-sm text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Support </a>
                            </li>
                        </ul>
                    </div>
    
                    <p className="mt-6 text-sm text-blue-200 lg:mt-0">© Copyright 2021, All Rights Reserved by Postcraft</p>
                </div>
            </div>
        </div>
    </section>
    

  )
}

export default Footer