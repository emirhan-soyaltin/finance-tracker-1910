import { Dialog, Transition } from '@headlessui/react'
import React,{Fragment} from 'react'
import { useState } from 'react'


const EnterModal = ({
    setShowEnterModal,
    showEnterModal,
    handleFormSubmit,
    submitDisabled,
    enterType,
    enterAmount,
    setEnterAmount,
    enterExplanation,
    setEnterExplanation,
    setSelectedCurrency,
}) => {
    
  return (
    <>
    <Transition appear show={showEnterModal} as={Fragment}>
        <Dialog
        as='div'
        className='fixed inset-0 z-10 overflow-y-auto'
        onClose={() => setShowEnterModal(false)}
        >
            <div className='min-h-screen px-4 text-center bg-space bg-opacity-50'>
                <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-30'
                leave='ease-in duration-200'
                leaveFrom='opacity-0'
                leaveTo='opacity-100'
                >
                    <Dialog.Overlay className='fixed inset-0' />
                </Transition.Child>
                
                <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
                >
                    <div className='inline-block  w-full max-w-md p-6 my-8 overflow-h text-left align-middle transition-all transform bg-plat shadow-xl rounded-2xlidden'>
                        <Dialog.Title 
                        as='h3'
                        className='text-lg font-medium leading-5 text-myblack text-center mt-4'
                        >
                            {enterType}
                        </Dialog.Title>
                        <div className='mt-2 w-full justify-center text-center'>
                            <form 
                            
                            >
                                <div className='mt-12'>
                                    <label
                                    htmlFor='amount'
                                    className='my-2 text-xl'
                                    >
                                        Amount
                                    </label>
                                    <br />
                                    <input onClick={() => {
                                        setSelectedCurrency("");
                                      }}
                                      type="number"
                                      id="amount"
                                      value={enterAmount}
                                    placeholder="Money Amount"
                                      onChange={(event) => setEnterAmount(event.target.value)}
                                    className='p-2 my-2 placeholder-yellow-100 text-xl rounded-lg border border-transparent focuns:outlinefocus:ring-purple-400 focus:border-transparent focus:bg-blue-700 smooth-transition-2'
                                    />
                                </div>
                                <div className='mt-12'>
                                    <label htmlFor="user-username"
                                    className='my-2 text-xl'
                                    >
                                        Currency Type
                                    </label>
                                    <br />
                                    <div className='flex justify-center mt-2'>
                                        <input 
                                        list='currencies'
                                        name='currency'
                                        id='currency'
                                        className='text-center w-16 cursor-pointer select-all'
                                        />

                                    </div>
                                </div>
                                <div className='mt-12'>
                                    <label
                                    htmlFor='explanation'
                                    className='my-2 text-xl'
                                    >
                                        Explanation
                                    </label>
                                    <br />
                                    <input type="text"
                        id="explanation"
                        value={enterExplanation}
                        placeholder="Detail"
                        onChange={(e) => setEnterExplanation(e.target.value)}
                                    className='p-2 my-2 text-xl rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-blue-700 smooth-transition-2'

                                    />

                                </div>
                                <div className='flex justify-center items-center my-4'>
                                    <button
                                    onSubmit={handleFormSubmit}
                                     disabled={submitDisabled}
                                    type='submit'
                                    className=' rounded-xl px-4 py-2 bg-space text-white'
                                    >Add {enterType} </button>
                                </div>

                            </form>

                        </div>
                    </div>

                </Transition.Child>
            </div>

        </Dialog>
    </Transition>
    </>
  )
}

export default EnterModal