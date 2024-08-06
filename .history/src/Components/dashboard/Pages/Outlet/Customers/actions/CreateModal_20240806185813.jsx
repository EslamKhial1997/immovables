import { Button, Modal } from "flowbite-react";

const CreateModal = () => {
  return (
    // <Modal show={openModal} onClose={() => setOpenModal(false)}>
    <Modal show={true}>
    <Modal.Header></Modal.Header>
    <Modal.Body>
    <Stack spacing={6}>
              

              <FormControl>
                <FormLabel fontWeight="bold" textTransform="capitalize" color="white">
                  {t('Title')}
                </FormLabel>
                <Input type="text" bg={theme.body} color={theme.dark} border="none" borderRadius={2}
                  placeholder={t('title')} _placeholder={{ textTransform: 'capitalize' }}
                  {...register("title", {
                    required: `${t('validation.required')}`
                  })}
                />
                {errors.name?.message &&
                  <Text color="red.600" marginTop={2}>{errors.name.message}</Text>}
              </FormControl>
              <FormControl>
                <FormLabel fontWeight="bold" textTransform="capitalize" color="white">
                  {t('pages.challenges.name')}
                </FormLabel>
                <Input type="text" bg={theme.body} color={theme.dark} border="none" borderRadius={2}
                  placeholder={t('SubTitle')} _placeholder={{ textTransform: 'capitalize' }}
                  {...register("subtitle", {
                    required: `${t('validation.required')}`
                  })}
                />
                {errors.name?.message &&
                  <Text color="red.600" marginTop={2}>{errors.name.message}</Text>}
              </FormControl>
              <FormControl>
                <FormLabel fontWeight="bold" textTransform="capitalize" color="white">
                  {t('Image')}
                </FormLabel>
                <Input type="file" bg={theme.body} color={theme.dark} border="none" borderRadius={2}
               
                  {...register("image", {
                    required: `${t('validation.required')}`
                  })}
                />
                {errors.name?.message &&
                  <Text color="red.600" marginTop={2}>{errors.name.message}</Text>}
              </FormControl>
              <FormControl>
                <FormLabel fontWeight="bold" textTransform="capitalize" color="white">
                  {t('Logo')}
                </FormLabel>
                <Input type="file" bg={theme.body} color={theme.dark} border="none" borderRadius={2}
               
                  {...register("logo", {
                    required: `${t('validation.required')}`
                  })}
                />
                {errors.name?.message &&
                  <Text color="red.600" marginTop={2}>{errors.name.message}</Text>}
              </FormControl>

           

            
            </Stack>
    </Modal.Body>
    {/* <Modal.Footer>
      <Button onClick={() => setOpenModal(false)}>I accept</Button>
      <Button color="gray" onClick={() => setOpenModal(false)}>
        Decline
      </Button>
    </Modal.Footer> */}
     <Modal.Footer className="gap-2">
      <Button >اضافه</Button>
      <Button color="gray" >
        اغلاق
      </Button>
    </Modal.Footer> 
    
  </Modal>
  )
}

export default CreateModal
