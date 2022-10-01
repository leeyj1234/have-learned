package com.moolcalm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.moolcalm.domain.Criteria;
import com.moolcalm.domain.R_configVO;
import com.moolcalm.mapper.BoardMapper;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Log4j
@Service
@AllArgsConstructor
public class BoardServiceImpl implements BoardService {
	private BoardMapper mapper;

	public void register(R_configVO r_config) {
		log.info("register...."+r_config);
		mapper.insertSelectKey(r_config);		
	}	

	public R_configVO get(long r_num) {
		log.info("getregister...."+r_num);
		return mapper.read(r_num);}

	public boolean modify(R_configVO r_config) {
		log.info("modify...."+r_config);
		return mapper.update(r_config)==1;}

	public boolean remove(long r_num) {
		log.info("remove...."+r_num);		
		return mapper.delete(r_num)==1;}

	@Override

	public List<R_configVO> getList(Criteria cri) {
	log.info("getList........");
	return mapper.getListWithPaging(cri);
	}

	@Override
	public int getTotalCount(Criteria cri) {
	return mapper.getTotalCount(cri);
	}

	}
